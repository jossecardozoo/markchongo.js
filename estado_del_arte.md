# Estado del arte

En este capítulo se resumen los antecedentes más relevantes para el proyecto y las metodologías que fueron utilizadas en trabajos previos sobre predicción de contaminación del aire.

Inicialmente se utilizaron métodos lineales que funcionaban bien en contextos simples, pero presentaban limitaciones al momento de predecir series temporales complejas. El trabajo de Aditya et al. se llevó a cabo en India y utilizó datos atmosféricos del repositorio UCI para predecir niveles de contaminación del aire asociados a PM<sub>2.5</sub>. El sistema tenía dos funciones: una para clasificar el aire como contaminado o no con un modelo de regresión logística, y otra para predecir valores de PM<sub>2.5</sub> en la ciudad utilizando un modelo autorregresivo que incorporaba el comportamiento previo de la serie temporal.

Los resultados reportaron una precisión de 0.998859 en la clasificación y un error cuadrático medio de 27.000 &micro;g/m<sup>3</sup> en las predicciones temporales. Aunque el enfoque mostró buen desempeño en escenarios simples, fue diseñado para trabajar con relaciones lineales. En contraste, el objetivo de este proyecto es utilizar redes neuronales artificiales, capaces de identificar patrones no lineales y mejorar la capacidad de predicción.

Debido a las limitaciones de los enfoques lineales, comenzaron a desarrollarse modelos basados en redes neuronales artificiales. En este contexto, Kök et al. elaboraron un modelo de aprendizaje profundo para predecir la calidad del aire en ciudades inteligentes utilizando información de Dinamarca y Rumania. Las redes empleadas fueron LSTM con una capa de entrada, 24 capas ocultas y una capa de salida, entrenando una red para cada gas objetivo: O<sub>3</sub>, NO<sub>2</sub> y PM<sub>2.5</sub>. Para el entrenamiento se incorporaron datos de tránsito, clima y estacionamiento. Además, implementaron un modelo Support Vector Regression (SVR) como referencia.

El modelo LSTM obtuvo una precisión de 0.98 en los estados críticos de polución y logró un mayor F1 que el SVR. Sin embargo, no consideró la dimensión espacial de los datos, lo que simplificó la arquitectura pero limitó su capacidad para modelar interacciones entre distintas ubicaciones.

Cordova et al. implementaron dos arquitecturas de redes neuronales, una de retropropagación hacia adelante y otra recurrente LSTM, con el objetivo de predecir el comportamiento espacio-temporal de la calidad del aire en Lima, Perú. Utilizaron datos de cinco estaciones junto con variables meteorológicas y entrenaron los modelos mediante Hold-Out y validación cruzada con bloques no solapados. Los resultados mostraron un alto desempeño en la predicción de la concentración media de PM10, aunque la precisión se redujo en períodos de alta contaminación. Este trabajo es relevante porque muestra la utilidad de las redes neuronales para modelar patrones espacio-temporales, aunque la arquitectura empleada no incorpora explícitamente la dimensión espacial dentro del modelo.

Otro enfoque importante fue el de Li et al., quienes utilizaron datos meteorológicos y dirección del viento de Beijing para predecir la concentración de PM<sub>2.5</sub> en las siguientes 24 horas. Implementaron cuatro modelos: LSTM univariado, LSTM multivariado, CNN-LSTM univariado y CNN-LSTM multivariado. El mejor desempeño se obtuvo con el último, que alcanzó un MAE de 13.9697 &micro;g/m<sup>3</sup> y un RMSE de 17.9306 &micro;g/m<sup>3</sup>. En este caso, la combinación CNN-LSTM permitió utilizar CNN para identificar patrones locales y LSTM para capturar dependencias históricas.

Wang et al. también propusieron un modelo híbrido utilizando datos de series temporales provenientes de China, con el objetivo de predecir el contenido de PM<sub>2.5</sub> una hora hacia adelante. Para ello utilizaron información de calidad del aire, humedad, presión, temperatura y nieve. El trabajo combinó ARIMA para predecir el comportamiento lineal y una red LSTM para modelar los residuos que no podían explicarse con el modelo estadístico. El modelo ARIMA-LSTM obtuvo un RMSE de 0.97 &micro;g/m<sup>3</sup>, mostrando una mejora significativa frente a una LSTM simple.

Por último, Cáceres et al. propusieron un modelo híbrido Prophet-LSTM para predecir la concentración de PM<sub>2.5</sub> en siete distritos de Madrid utilizando datos del portal de datos abiertos entre 2019 y 2024. En la depuración de datos eliminaron los registros incompletos o con valores faltantes antes del entrenamiento y la evaluación. El modelo constaba de dos fases: primero, Prophet descomponía la serie temporal en tendencia, estacionalidad y eventos especiales; luego, los residuos se utilizaban como entrada para un modelo LSTM. Finalmente, ambas salidas se combinaban. Los autores reportaron una mejora del 15 % en precisión respecto a modelos híbridos como SARIMA-LSTM y ETS-LSTM. Aun así, en este proyecto se busca explorar métodos de aprendizaje automático que además incorporen dependencias espaciales entre estaciones y variables meteorológicas adicionales.

Un enfoque claramente espacio-temporal es el presentado por Yu et al., quienes utilizaron datos del portal de datos abiertos de Madrid para predecir la calidad del aire en la ciudad mediante un modelo Attention Temporal Graph Convolutional Network (A3T-GCN). Esta arquitectura combina mecanismos de attention y GRU para capturar la dimensión temporal, y capas GCN para modelar dependencias espaciales en datos sin estructura euclidiana regular. Para entrenar el modelo se utilizaron datos meteorológicos, de tránsito y de calidad del aire provenientes de diferentes estaciones.

Debido a cambios en la ubicación de los puntos de medición dentro del período considerado, los datos fueron agrupados en una grilla de celdas. Esta estrategia permitió manejar la distribución no uniforme de los sensores y facilitó la aplicación del modelo. Los resultados mostraron mejoras frente a LSTM, GRU y Temporal Graph Neural Networks (TGNN): el modelo redujo el RMSE entre 10.9 % y 14.3 %, el MAE entre 5.6 % y 9.7 %, y mejoró el coeficiente de correlación de Pearson entre 3.4 % y 17 %. Este antecedente es particularmente relevante porque utiliza datos del mismo portal y un conjunto de métricas comparables a las empleadas en esta tesis.

Jana et al. desarrollaron tres variantes de modelos de Convolución en Grafo Espacio-Temporal (STGCN), utilizando datos de Delhi y California junto con variables meteorológicas como dirección y velocidad del viento, humedad y radiación solar. En su formulación, los nodos del grafo representaban estaciones y las aristas se ponderaban por distancia. El objetivo fue predecir seis contaminantes distintos en horizontes de 1, 24 y 48 horas.

Las tres variantes exploradas fueron STGCN-A, que aplicaba primero capas espaciales y luego temporales; STGCN-B, que ubicaba las capas temporales antes y después de la capa espacial; y STGCN-C, que ejecutaba las capas espaciales y temporales en paralelo. STGCN-B obtuvo mejores resultados a 1 h y 48 h, mientras que STGCN-C destacó en el horizonte de 24 h, superando a modelos como LSTM o combinaciones CNN+RNN tanto en precisión como en eficiencia. La <span class="table-ref" data-table-ref="tbl-comparacion-trabajos-relacionados"></span> resume estos antecedentes en términos de contaminantes considerados, datos adicionales, cantidad de estaciones, período de recolección, horizonte de predicción y modelos empleados.

<figure class="thesis-table" id="tbl-comparacion-trabajos-relacionados">
  <table class="thesis-table__table">
    <thead>
      <tr class="header-row">
        <th>Autor (año)</th>
        <th>Contaminantes</th>
        <th>Datos adicionales</th>
        <th># Estaciones</th>
        <th>Período (años)</th>
        <th>Ventana (horas)</th>
        <th>Modelos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><cite>Kök et al. (2017)</cite></td>
        <td>O<sub>3</sub>, NO<sub>2</sub>, PM<sub>2.5</sub></td>
        <td>Tránsito, clima, estacionamiento</td>
        <td>1</td>
        <td>3</td>
        <td>N/A</td>
        <td>LSTM</td>
      </tr>
      <tr>
        <td><cite>Aditya et al. (2018)</cite></td>
        <td>PM<sub>2.5</sub></td>
        <td>Temperatura, viento, presión, rocío</td>
        <td>1</td>
        <td>2</td>
        <td>N/A</td>
        <td>LR, AR</td>
      </tr>
      <tr>
        <td><cite>Li et al. (2019)</cite></td>
        <td>PM<sub>2.5</sub></td>
        <td>Dirección viento, temperatura, presión, nieve, lluvia</td>
        <td>1</td>
        <td>3</td>
        <td>24</td>
        <td>LSTM, CNN-LSTM</td>
      </tr>
      <tr>
        <td><cite>Cordova et al. (2021)</cite></td>
        <td>PM10</td>
        <td>Temperatura, humedad, velocidad viento</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td>MLP, LSTM</td>
      </tr>
      <tr>
        <td><cite>Wang et al. (2021)</cite></td>
        <td>PM<sub>2.5</sub></td>
        <td>Humedad, lluvia, temperatura, presión, nieve</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>ARIMA-LSTM</td>
      </tr>
      <tr>
        <td><cite>Yu et al. (2021)</cite></td>
        <td>NO<sub>2</sub></td>
        <td>Intensidad de tránsito, carga, velocidad y dirección del viento, temperatura, humedad, presión barométrica, radiación solar</td>
        <td>24</td>
        <td>3</td>
        <td>1-12, 12-24, 24-36, 36-48</td>
        <td>A3T-GCN</td>
      </tr>
      <tr>
        <td><cite>Jana et al. (2024)</cite></td>
        <td>PM<sub>2.5</sub>, O<sub>3</sub>, PM10, SO<sub>2</sub>, CO, NO<sub>2</sub></td>
        <td>Velocidad y dirección del viento, humedad, radiación solar</td>
        <td>40</td>
        <td>1</td>
        <td>1, 24, 48</td>
        <td>STGCN</td>
      </tr>
      <tr>
        <td><cite>Cáceres et al. (2024)</cite></td>
        <td>PM<sub>2.5</sub></td>
        <td>Ninguno</td>
        <td>7</td>
        <td>6</td>
        <td>N/A</td>
        <td>Prophet-LSTM</td>
      </tr>
    </tbody>
  </table>
  <figcaption>Comparación de trabajos relacionados sobre la predicción de la contaminación del aire, incluyendo contaminantes considerados, datos adicionales, cantidad de estaciones, período de recolección, horizonte de predicción y modelos empleados.</figcaption>
</figure>
