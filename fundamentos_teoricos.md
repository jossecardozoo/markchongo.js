# Fundamentos teóricos

En este capítulo se abordan los principales conceptos para comprender las temáticas tratadas en el proyecto de grado. 

## Aprendizaje automático

El aprendizaje automático es una rama de la inteligencia artificial en la cual los sistemas tienen la capacidad de identificar patrones en datos de manera autónoma. A partir de conjuntos de datos, los sistemas aprenden modelos que permiten realizar predicciones o tomar decisiones sin ser explícitamente programados para cada caso particular.

En esta sección se describen las principales categorías de los modelos de aprendizaje automático.

### Clasificación de los algoritmos de aprendizaje automático

Los algoritmos de aprendizaje automático pueden clasificarse según el tipo de información disponible durante el proceso de entrenamiento. 

#### Aprendizaje supervisado

El aprendizaje supervisado consiste en aquellos algoritmos que aprenden a asociar una entrada con una salida a través de un conjunto de datos etiquetados. En este caso, se conoce la clase o el valor de la función objetivo de cada entrada, y el objetivo del modelo es minimizar el error al predecir nuevas observaciones desconocidas. Entre las aplicaciones más comunes de este tipo de aprendizaje se encuentran los problemas de regresión y el uso de redes neuronales.

#### Aprendizaje no supervisado

En el aprendizaje no supervisado los algoritmos aprenden a partir de un conjunto de datos sin etiquetas, con el objetivo de identificar patrones, estructuras o relaciones subyacentes entre las instancias. Este tipo de aprendizaje se asocia a tareas como la estimación de la densidad de los datos, la reducción de dimensionalidad, la eliminación de ruido o el agrupamiento de instancias con características similares. Entre las técnicas más utilizadas se encuentran los métodos de clustering y el análisis de componentes principales.

### Redes neuronales artificiales

Las redes neuronales artificiales son un modelo de aprendizaje automático que tiene un paralelismo con la forma de aprendizaje de los humanos. El cerebro humano tiene neuronas que se conectan entre sí para aprender. En cambio, las redes neuronales artificiales contienen unidades de cómputo denominadas neuronas, que están conectadas entre sí a través de pesos. En esta sección se presentan las diferentes arquitecturas y modelos más relevantes para el desarrollo del presente proyecto.  

#### Arquitectura de las redes neuronales
La red neuronal artificial calcula la salida a través de las entradas y aprende ajustando los pesos, que son los parámetros intermedios del modelo, mediante un proceso llamado retropropagación. Las redes están compuestas por capas de neuronas que se conectan entre sí. La información comienza en la capa de entrada, pasa por una o varias capas ocultas y llega a la capa de salida. Las capas ocultas son las encargadas de transformar esta información utilizando diferentes funciones de activación, que permiten que el modelo aprenda relaciones más complejas que simplemente combinaciones lineales de las entradas. 

El conjunto de datos de entrenamiento es el encargado de brindar la retroalimentación necesaria para ajustar los pesos y permitir refinar el modelo. Así, en varias iteraciones, puede aprender en función de cuántas veces la salida generada coincide con la etiqueta real. A partir de dicho funcionamiento, pueden clasificarse según su arquitectura, en aquellas de una sola capa y las de múltiples capas. 

**Red neuronal de una sola capa**
La red neuronal más simple se conoce con el nombre de perceptrón y se compone de una capa de entrada no computacional, conectada a una neurona de salida a través de un conjunto de pesos. En el modelo, los cómputos se realizan en la neurona de salida, donde se multiplican los pesos por las características, luego se suman y se aplica una función de activación. 

Aunque el perceptrón tiene una única capa computacional, también puede tener un término llamado sesgo, una variable adicional que permite capturar lo que no depende directamente de los valores de las entradas. Generalmente, se tiene una neurona de valor constante asociada a la salida, en donde el peso funciona como el valor del sesgo. 

**Red neuronal multicapa**
En esta arquitectura se tienen varias capas computacionales, donde las capas intermedias de procesamiento se conocen como capas ocultas, ya que los cálculos que se realizan en las mismas no son visibles para el usuario. Este tipo de arquitectura se conoce como feedforward, en la que cada capa utiliza los resultados de la capa inmediatamente anterior.

## Modelado secuencial
En esta sección se introduce el problema del modelado secuencial, que permite solucionar problemas en los que el objetivo no es predecir un único valor, sino una secuencia completa a partir de una secuencia de entradas, en donde los valores de las longitudes pueden ser diferentes.

### Modelos secuencia a secuencia

Los modelos secuencia a secuencia son un enfoque general para los problemas en los que la entrada y la salida se representan como secuencias de datos. Los modelos tradicionales de predicción asocian una secuencia de entrada a un único valor de salida. En este caso, los modelos secuencia a secuencia aprenden una función que relacione una secuencia de entrada **x** = (x₁, x₂, ..., xₙₓ) a una secuencia de salida **y** = (y₁, y₂, ..., yₙᵧ), en donde ambas pueden tener longitudes variables y no necesariamente coinciden. 

### Arquitectura codificador--decodificador

La arquitectura codificador--decodificador es un esquema del modelo secuencia a secuencia. Esta arquitectura se compone de un codificador que procesa la secuencia de entrada en un vector de contexto C, y un decodificador, que genera la secuencia de salida a partir de la información que obtiene del codificador. Este tipo de arquitectura puede componerse de varios codificadores y decodificadores, que son redes neuronales independientes. 

El codificador recibe la secuencia de entrada **x**, y su estado oculto final es usado como el contexto, que resume la información importante de toda la secuencia de entrada. El vector guarda una representación aprendida que contiene información sobre patrones, dependencias y tendencias de los datos. A partir del contexto C, el decodificador genera la secuencia de salida **y** de manera progresiva. 

La arquitectura codificador--decodificador no restringe las longitudes de las secuencias de entrada y salida, por lo que pueden ser diferentes. A su vez, es una arquitectura flexible porque pueden utilizarse diferentes arquitecturas para implementar el codificador y el decodificador.

## Modelado temporal

En esta sección se introduce el problema del modelado temporal de series de tiempo y se describe la arquitectura de redes neuronales recurrentes para su resolución.

### Series temporales y dependencias temporales
Las series temporales son un conjunto de observaciones ordenadas en el tiempo, en donde para cada punto temporal se tiene asociado un valor correspondiente. En las series temporales el orden de las observaciones es un factor crucial, ya que los valores en un instante suelen depender del comportamiento histórico de la serie. Los valores actuales no son independientes del pasado, sino que están influenciados por tendencias, ciclos y patrones anteriores.

Las series temporales se observan en intervalos de tiempo discretos y equiespaciados. A partir de la información disponible hasta un determinado instante, se pueden realizar las predicciones sobre valores futuros de la serie. El objetivo del modelado temporal es estimar el valor de la serie en un horizonte futuro a partir de las observaciones actuales y pasadas. Dada una serie temporal {zₜ}, el problema de predicción se define como la estimación de un valor futuro zₜ₊ₗ usando la información disponible hasta el tiempo t, donde l representa el horizonte de predicción tomado en cuenta.

### Redes neuronales recurrentes
En los modelos tradicionales las observaciones son tratadas como instancias independientes, por lo que no toman en cuenta la estructura secuencial de los datos. Para trabajar en problemas temporales, tales como el de la predicción de la polución, es necesario hacer uso de redes neuronales que tengan memoria y permitan tomar en cuenta información histórica. En este contexto, las redes neuronales recurrentes permiten capturar la manera en la que los valores de entrada en los diferentes instantes de tiempo están directamente relacionados. 

Para considerar una red neuronal como recurrente, a diferencia de las redes feedforward, debe contener ciclos en su arquitectura. La salida de la capa oculta en el instante de tiempo t - 1 se usa como entrada para la del siguiente instante t. La forma matemática básica de una red neuronal recurrente se muestra a continuación, donde el estado oculto en el tiempo t, hₜ, se calcula como una función no lineal f que toma como entrada una combinación lineal del vector de entrada actual xₜ, ponderado por la matriz W, y del estado oculto previo hₜ₋₁, ponderado por la matriz recurrente U, además del sesgo b. Esta estructura permite que la red mantenga un tipo de memoria temporal, integrando información pasada para influir en el procesamiento presente.

<div class="math-block" aria-label="Ecuación de red neuronal recurrente">
  <span class="math-symbol">h</span><sub>t</sub>
  <span class="math-operator">=</span>
  <span class="math-symbol">f</span>
  <span class="math-paren">(</span>
  <span class="math-symbol">W</span><span class="math-symbol">x</span><sub>t</sub>
  <span class="math-operator">+</span>
  <span class="math-symbol">U</span><span class="math-symbol">h</span><sub>t-1</sub>
  <span class="math-operator">+</span>
  <span class="math-symbol">b</span>
  <span class="math-paren">)</span>
</div>

Para entrenar este tipo de redes, los valores son propagados hacia atrás usando retropropagación a través del tiempo. Se realiza un recorrido hacia adelante guardando el valor del estado oculto en cada paso y después un recorrido inverso para actualizar los pesos utilizando esta información. El problema con el entrenamiento de este tipo de redes se da principalmente debido al tamaño de la entrada y el grado de profundidad de la red. Lo que ocurre es que se multiplica varias veces la misma matriz de pesos, lo que puede ocasionar inestabilidad en el gradiente. La inestabilidad se puede dar de dos maneras: los gradientes tienden a desaparecer si los valores que se están multiplicando son pequeños o se disparan si los pesos son valores grandes. Este problema hace que las redes neuronales recurrentes sean útiles para recordar información a corto plazo pero no cuando se tienen secuencias largas como entrada.

#### Redes LSTM
Las redes LSTM solucionan el problema de la memoria a corto plazo ya que están diseñadas específicamente para aprender secuencias a largo plazo. En este tipo de redes, cada estado oculto tiene tres entradas que corresponden a la memoria actual, la salida del paso anterior y la entrada del paso actual, y dos salidas que son la memoria actualizada y la salida del paso actual. Se modifica la arquitectura de las redes neuronales recurrentes agregando un vector llamado estado de celda que retiene parte de la información pasada para que se mantenga a lo largo del tiempo. 

En las redes LSTM la unidad de procesamiento básica, en vez de ser una neurona, se llama bloque de memoria y contiene varias celdas de memoria para mantener la información a lo largo del tiempo. El modelo divide el manejo del contexto en dos problemas: por un lado descartar la información que ya no es relevante, y por otro incluir la que podría serlo. Por este motivo tienen un mecanismo de puertas de entrada y salida para poder controlar la información que se retiene y se transmite. Para poder lidiar con el problema del desvanecimiento y explosión del gradiente, dentro de cada celda se tiene una neurona conectada consigo misma formando el carrusel de error constante. Esto hace que el error propagado hacia atrás durante el entrenamiento no se altere y se vuelva inestable, sino que se mantiene constante durante el tiempo. 

La arquitectura básica de una red LSTM se compone de tres puertas: puerta de entrada (iₜ), olvido (fₜ) y salida (oₜ), para las que se utiliza la función de activación sigmoide ya que restringe los valores entre 0 y 1 permitiendo decidir cuánta información pasa. Además, se utiliza la función tanh para generar el nuevo candidato a celda (c̃ₜ) ya que produce valores entre -1 y 1 permitiendo tanto restar como agregar información. Esto permite que la red decida, en cada paso de tiempo, qué información incorporar, olvidar o transmitir.

<div class="math-block" aria-label="Ecuación de compuertas LSTM">
  <span class="math-bracket">[</span>
  <span class="math-symbol">i</span><sub>t</sub><span class="math-punct">,</span>
  <span class="math-symbol">f</span><sub>t</sub><span class="math-punct">,</span>
  <span class="math-symbol">o</span><sub>t</sub><span class="math-punct">,</span>
  <span class="math-symbol">c̃</span><sub>t</sub>
  <span class="math-bracket">]</span><sup>T</sup>
  <span class="math-operator">=</span>
  <span class="math-bracket">[</span>
  <span class="math-symbol">σ</span><span class="math-punct">,</span>
  <span class="math-symbol">σ</span><span class="math-punct">,</span>
  <span class="math-symbol">σ</span><span class="math-punct">,</span>
  <span class="math-symbol">tanh</span>
  <span class="math-bracket">]</span><sup>T</sup>
  <span class="math-paren">(</span>
  <span class="math-symbol">W</span><sup>(k)</sup>
  <span class="math-bracket">[</span>
  <span class="math-symbol">h</span><sub>t</sub><sup>(k-1)</sup><span class="math-punct">,</span>
  <span class="math-symbol">h</span><sub>t-1</sub><sup>(k)</sup>
  <span class="math-bracket">]</span><sup>T</sup>
  <span class="math-operator">+</span>
  <span class="math-symbol">b</span><sup>(k)</sup>
  <span class="math-paren">)</span>
</div>


## Modelado espacial

En esta sección se introduce el problema del modelado espacial, y se describen las arquitecturas de redes neuronales utilizadas para capturar este tipo de dependencias.

### Redes neuronales convolucionales
Las redes neuronales convolucionales (Convolutional Neural Network, CNN) son un tipo de arquitectura de aprendizaje profundo diseñadas para trabajar con datos que tienen una estructura de rejilla con dependencias espaciales locales. Existen CNN unidimensionales (1D), bidimensionales (2D) y tridimensionales (3D). 1D CNN es usada principalmente para el procesamiento de datos secuenciales, 2D CNN para el reconocimiento de imágenes y texto, y 3D CNN para datos tales como videos. 

Una arquitectura convolucional típica se compone de tres capas principales: la capa de convolución, la capa de agrupación y la capa totalmente conectada. 

**Capa de convolución.** La capa de convolución hace uso de filtros para realizar operaciones que permiten extraer características importantes de la entrada. Los filtros se mueven por la entrada para obtener patrones locales, realizando el producto de la entrada y el filtro para obtener el mapa de características. La profundidad del filtro coincide con la de la entrada sobre la que se aplica. 

**Capa de agrupación.** La capa de agrupación también aplica un filtro sobre la entrada, pero sin tener un peso asociado. Esta capa realiza operaciones de agregación dentro de una determinada región, reduciendo el tamaño de los datos e introduciendo cierta invarianza espacial. Los principales tipos de agrupación son la agrupación máxima, en la que se selecciona el valor máximo de la región y agrupación media donde se calcula el valor promedio de la región.

**Capa totalmente conectada.** La capa totalmente conectada se encuentra normalmente al final de la arquitectura de una red convolucional, donde cada dato de entrada está directamente conectado a todas las neuronas y funciona igual que en una red feed-forward convencional. Permite integrar toda la información que se extrajo previamente para realizar las predicciones finales. Como paso previo se aplanan los datos para obtener un vector de una sola dimensión, facilitando el procesamiento.

### Redes neuronales gráficas

Las redes neuronales gráficas (Graph Neural Networks, GNN) son una extensión de las redes neuronales diseñada para trabajar con datos estructurados como grafos. En las GNN cada nodo del grafo representa una entidad y las aristas describen las relaciones entre las entidades. Para poder capturar la información de los nodos y de su relación con los nodos vecinos, se requieren modelos capaces de incorporar explícitamente la estructura del grafo durante el proceso de aprendizaje.

Las redes neuronales gráficas permiten agregar información entre los nodos conectados. A diferencia de las redes tradicionales, en las GNN la representación de un nodo se actualiza iterativamente combinando su información con la de otros nodos. Este proceso permite que la información se propague a través de la estructura del grafo, de manera que cada nodo pueda incorporar progresivamente información de nodos más lejanos a medida que se apilan capas del modelo.

#### Redes convolucionales sobre grafos
Las redes convolucionales sobre grafos (Graph Convolutional Networks, GCN) permiten utilizar la estructura de grafos y combinar la información de un nodo con la de sus vecinos de forma convolucional. Los grafos tienen una estructura irregular porque el número de nodos y las relaciones entre ellos pueden variar. Las redes convolucionales sobre grafos permiten modelar relaciones espaciales complejas que no pueden representarse mediante una estructura de grilla regular.

La formulación utilizada de las GCN fue introducida por Kipf y Welling. Cada capa de una GCN actualiza la representación de cada nodo combinando su información y la de sus vecinos a través de la estructura del grafo. La matriz Ã = A + I es la matriz de adyacencia original y las conexiones del nodo consigo mismo, para que cada nodo conserve su propia información y no tenga solamente la de sus vecinos. La normalización mediante D̃ hace que un nodo no sea más influyente debido a la cantidad de conexiones que tiene. La transformación lineal W⁽ˡ⁾ permite al modelo aprender combinaciones de las características agregadas y la función de activación σ(·) permite la no linealidad.

<div class="math-block" aria-label="Ecuación de convolución sobre grafos">
  <span class="math-symbol">H</span><sup>(l+1)</sup>
  <span class="math-operator">=</span>
  <span class="math-symbol">σ</span>
  <span class="math-paren">(</span>
  <span class="math-symbol">D̃</span><sup>-1/2</sup>
  <span class="math-symbol">Ã</span>
  <span class="math-symbol">D̃</span><sup>-1/2</sup>
  <span class="math-symbol">H</span><sup>(l)</sup>
  <span class="math-symbol">W</span><sup>(l)</sup>
  <span class="math-paren">)</span>
</div>

Cuando se apilan varias capas de convolución y se realizan sucesivas rondas de agregación de información entre nodos vecinos, las GCN presentan un problema denominado over-smoothing. Al aumentar la profundidad de la red, las representaciones de los nodos convergen en vectores similares y se vuelven poco informativas. Cada capa de una GCN realiza una agregación que equivale a multiplicar las representaciones de los nodos por la matriz de adyacencia normalizada. Cuando esta operación se repite varias veces, las grandes diferencias desaparecen y se vuelven más uniformes, suavizando la señal. Este problema hace que el modelo no pueda distinguir entre nodos con características diferentes y no pueda captar estructuras o patrones locales importantes. Por esta razón se diseñan arquitecturas poco profundas para mitigar este efecto.
