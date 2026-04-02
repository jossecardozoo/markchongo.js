# Modelos predictivos

En este capítulo se resumen los modelos predictivos de redes neuronales desarrollados para estimar las concentraciones de los contaminantes atmosféricos y el criterio general utilizado para su construcción.

## Modelos de redes neuronales

Se desarrollan tres modelos con distinta complejidad. El primero corresponde a un perceptrón multicapa, utilizado como base para establecer una referencia de rendimiento sin tener en cuenta la naturaleza secuencial de los datos. El segundo adopta una arquitectura codificador-decodificador basada en redes LSTM, capaz de capturar dependencias temporales a largo plazo. Por último, se incorpora información espacial mediante una arquitectura híbrida GCN-LSTM, donde las relaciones entre las estaciones de monitoreo se representan mediante un grafo para aprender de forma conjunta las interacciones espaciales y temporales.

### Perceptrón multicapa

El perceptrón multicapa constituye el modelo base desarrollado. Este modelo presenta una estimación inicial de los resultados y capta relaciones no lineales a través de una capa oculta. Se utiliza como punto de referencia para evaluar el desempeño de las arquitecturas secuenciales y espacio-temporales implementadas.

Se trata de una red no recurrente que considera la ventana de entrada como un conjunto de características estáticas. La primera capa de aplanamiento convierte los datos secuenciales en un vector unidimensional, transformando el tensor de entrada bidimensional (W, F) en un único vector de tamaño W &times; F, donde W es la cantidad de pasos considerados y F la cantidad de variables de entrada. Esta representación se conecta con una capa oculta de ocho unidades, que comprime la información de entrada en una representación latente. La capa utiliza una función de activación ReLU, permitiendo aprender patrones no lineales simples entre las variables.

Luego se incorpora una capa densa de salida que toma la representación comprimida y la proyecta linealmente a la cantidad total de valores OUT_STEPS &times; P, donde OUT_STEPS es el horizonte de predicción y P la cantidad de contaminantes objetivo. Finalmente, una capa de reestructuración reorganiza esa salida a la forma esperada para compararla con las etiquetas.

<div class="model-diagram architecture">
  <div class="diagram-node">
    <strong>Entrada</strong>
    <span>forma: (W, F)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Aplanamiento</strong>
    <span>longitud = W &times; F</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Capa oculta</strong>
    <span>unidades = 8, activación = ReLU</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Capa de salida</strong>
    <span>unidades = OUT_STEPS &times; P, activación = lineal</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Reestructuración</strong>
    <span>forma: (OUT_STEPS, P)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Salida</strong>
    <span>forma: (OUT_STEPS, P)</span>
  </div>
</div>

*Figura: Arquitectura del modelo perceptrón multicapa.*

### LSTM codificador-decodificador

Con el objetivo de incorporar la dimensión temporal en la predicción, se implementó una red neuronal basada en una arquitectura LSTM con un esquema codificador-decodificador. Este diseño permite capturar dependencias temporales a largo plazo presentes en los datos, modelando la evolución conjunta de variables meteorológicas y contaminantes a lo largo del tiempo.

Dada una ventana de entrada X &isin; R<sup>W &times; F</sup>, donde W es la longitud de la ventana temporal y F la cantidad de variables de entrada, se implementa un esquema codificador-decodificador con redes LSTM de 64 unidades. El codificador procesa la secuencia y la resume en un vector de contexto junto con sus estados finales (h, c), que representan memoria a corto y largo plazo. Ese vector de contexto se replica H = OUT_STEPS veces mediante una capa RepeatVector, generando una secuencia de longitud igual al horizonte de predicción.

La secuencia repetida se utiliza como entrada del decodificador, también con 64 unidades, inicializado con los estados finales del codificador. El decodificador procesa el contexto repetido y produce una secuencia de salida de igual longitud. Finalmente, una capa TimeDistributed asigna cada paso del decodificador a los P contaminantes objetivo, generando predicciones con forma Ŷ &isin; R<sup>H &times; P</sup>. La regularización &ell;<sub>2</sub> (1.49 &times; 10<sup>-6</sup>) se aplica a las capas LSTM del codificador y del decodificador. El modelo genera todos los valores de OUT_STEPS en una sola pasada hacia adelante.

<div class="model-diagram architecture">
  <div class="diagram-node">
    <strong>Entrada</strong>
    <span>forma: (W, F)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Codificador LSTM</strong>
    <span>unidades = 64, L2 = 1.49 &times; 10<sup>-6</sup></span>
    <span>salidas: contexto, h, c</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>RepeatVector</strong>
    <span>repeticiones = OUT_STEPS</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Decodificador LSTM</strong>
    <span>unidades = 64, inicialización = (h, c)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>TimeDistributed</strong>
    <span>unidades = P</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Salida</strong>
    <span>forma: (OUT_STEPS, P)</span>
  </div>
</div>

*Figura: Arquitectura del modelo codificador-decodificador LSTM.*

### GCN-LSTM codificador-decodificador

Los datos utilizados presentan dependencias temporales y espaciales. Las relaciones temporales son capturadas por el modelo LSTM presentado anteriormente. A su vez, la concentración de los contaminantes puede verse afectada por cambios en variables meteorológicas y contaminantes registrados en estaciones cercanas, por lo que resulta relevante incorporar también esta dimensión. Para modelar las relaciones espaciales entre estaciones se diseñó un modelo híbrido que combina el esquema codificador-decodificador LSTM con una red convolucional sobre grafos.

La representación espacial del sistema de monitoreo se modela mediante un grafo no dirigido G = (V, E), donde los vértices V = {v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>N</sub>} corresponden a las estaciones y las aristas E representan las conexiones espaciales entre ellas. Se considera que todas las estaciones están interconectadas, por lo que cada par de vértices (v<sub>i</sub>, v<sub>j</sub>) se conecta mediante una arista e<sub>ij</sub>. La relevancia de cada conexión se determina a través de pesos w<sub>ij</sub> asociados a las aristas. Estos pesos se definen en función de la distancia geográfica entre estaciones, de modo que las conexiones entre estaciones más lejanas sean más débiles. La ponderación se organiza en una matriz W = [w<sub>ij</sub>] &isin; R<sup>N &times; N</sup>.

Las distancias entre estaciones se calculan a partir de sus coordenadas geográficas mediante la fórmula de Haversine. A partir de la matriz de distancias D = [d<sub>ij</sub>] &isin; R<sup>N &times; N</sup>, donde cada elemento d<sub>ij</sub> representa la distancia en kilómetros entre las estaciones i y j, se define la matriz de pesos W utilizando la inversa de la distancia. En esta formulación, &epsilon; representa un valor pequeño que evita divisiones por cero:

<div class="math-block" aria-label="Ecuación de pesos por distancia inversa">
  <span class="math-symbol">w</span><sub>ij</sub>
  <span class="math-operator">=</span>
  <span class="math-frac">
    <span class="math-frac-top">1</span>
    <span class="math-frac-bar"></span>
    <span class="math-frac-bottom">
      <span class="math-symbol">d</span><sub>ij</sub>
      <span class="math-operator">+</span>
      <span class="math-symbol">&epsilon;</span>
    </span>
  </span>
  <span class="math-punct">,</span>
  <span class="math-symbol">i</span><span class="math-punct">,</span> <span class="math-symbol">j</span>
  <span class="math-operator">=</span>
  1 <span class="math-punct">,</span> ... <span class="math-punct">,</span> <span class="math-symbol">N</span>
</div>

Los valores de la diagonal se fijan inicialmente en cero para impedir que una estación se conecte consigo misma con pesos excesivos derivados de la distancia nula. Posteriormente se agregan lazos propios de peso unitario para que la información de una estación influya en su propia predicción. Luego se aplica una normalización simétrica para permitir que todas las estaciones contribuyan de forma balanceada. La matriz de adyacencia normalizada A se define de la siguiente forma:

<div class="math-block" aria-label="Ecuación de normalización de adyacencia">
  <span class="math-symbol">A</span>
  <span class="math-operator">=</span>
  <span class="math-symbol">D</span><sup>-1/2</sup>
  <span class="math-symbol">W</span>
  <span class="math-symbol">D</span><sup>-1/2</sup>
  <span class="math-punct">,</span>
  <span class="math-symbol">D</span>
  <span class="math-operator">=</span>
  <span class="math-symbol">diag</span>
  <span class="math-paren">(</span>
  <span class="math-symbol">&Sigma;</span><sub>j</sub>
  <span class="math-symbol">W</span><sub>ij</sub>
  <span class="math-paren">)</span>
</div>

La matriz A resultante se utiliza como matriz de adyacencia normalizada dentro de la GCN, permitiendo que la información se propague entre estaciones cercanas con mayor intensidad cuanto más próximas se encuentren.

Como no todos los contaminantes son medidos en todas las estaciones, se consideró una partición del grafo inicial en subgrafos. Para cada contaminante c, el grafo se restringe al subconjunto de estaciones que lo miden y se renormaliza dentro del subgrafo correspondiente, tomando W<sub>c</sub> = W[S<sub>c</sub>, S<sub>c</sub>]. Además, debido a la diferencia de variables meteorológicas y contaminantes disponibles por estación, no todas comparten el mismo conjunto de características. Para evitar una gran cantidad de variables nulas, se definió un umbral de presencia del 80 %. Solo se incluyen en cada subgrafo las variables disponibles en al menos el 80 % de las estaciones que miden el contaminante objetivo. El modelo GCN-LSTM se entrena y evalúa sobre cada subgrafo para garantizar que las predicciones se comparen únicamente con valores reales del contaminante correspondiente.

Una vez definido el grafo, se utiliza para construir el modelo híbrido GCN-LSTM codificador-decodificador. De esta manera, las relaciones espaciales capturadas por la GCN se combinan con las dependencias temporales modeladas por la LSTM. La arquitectura recibe un tensor de entrada con forma (W, N, F), donde N es la cantidad de estaciones del subgrafo. La capa GCN transforma esa entrada a una representación espacial con 64 unidades por nodo, luego se aplana la dimensión espacial para poder procesar la secuencia con un codificador LSTM de 64 unidades y regularización &ell;<sub>2</sub> = 1.37 &times; 10<sup>-6</sup>. Al igual que en el modelo anterior, el contexto se repite mediante RepeatVector, el decodificador se inicializa con los estados finales del codificador y una capa TimeDistributed genera finalmente una salida con forma (OUT_STEPS, N, P).

<div class="model-diagram architecture">
  <div class="diagram-node">
    <strong>Entrada</strong>
    <span>forma: (W, N, F)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>GCN</strong>
    <span>unidades = 64</span>
    <span>forma: (W, N, 64)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Aplanamiento</strong>
    <span>forma: (W, N &middot; 64)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Codificador LSTM</strong>
    <span>unidades = 64, L2 = 1.37 &times; 10<sup>-6</sup></span>
    <span>salidas: contexto, h, c</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>RepeatVector</strong>
    <span>repeticiones = OUT_STEPS</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Decodificador LSTM</strong>
    <span>unidades = 64, inicialización = (h, c)</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>TimeDistributed</strong>
    <span>unidades = N &middot; P</span>
  </div>
  <div class="diagram-arrow">↓</div>
  <div class="diagram-node">
    <strong>Salida</strong>
    <span>forma: (OUT_STEPS, N, P)</span>
  </div>
</div>

*Figura: Arquitectura del modelo GCN-LSTM codificador-decodificador.*
