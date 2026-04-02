# Apéndices

## Selección de hiperparámetros

Este Apéndice presenta los resultados de todas las configuraciones de búsqueda aleatoria evaluadas para la selección de los hiperparámetros de los modelos predictivos.

### Modelo LSTM

<figure class="thesis-table" id="tbl-random-search-lstm-h1">
  <table class="thesis-table__table">
    <thead>
      <tr class="header-row">
        <th>Dropout</th>
        <th>&ell;<sub>2</sub></th>
        <th>Tasa de aprendizaje</th>
        <th>Unidades LSTM</th>
        <th>Pérdida</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0.2</td><td>1.17 &times; 10<sup>-6</sup></td><td>1.02 &times; 10<sup>-4</sup></td><td>128</td><td>0.0287</td></tr>
      <tr><td>0.3</td><td>1.49 &times; 10<sup>-5</sup></td><td>1.49 &times; 10<sup>-4</sup></td><td>32</td><td>0.0387</td></tr>
      <tr><td>0.0</td><td>1.49 &times; 10<sup>-6</sup></td><td>1.43 &times; 10<sup>-4</sup></td><td>32</td><td>0.0180</td></tr>
      <tr><td>0.0</td><td>8.18 &times; 10<sup>-6</sup></td><td>1.53 &times; 10<sup>-4</sup></td><td>64</td><td>0.0175</td></tr>
      <tr><td>0.0</td><td>8.12 &times; 10<sup>-4</sup></td><td>1.05 &times; 10<sup>-4</sup></td><td>32</td><td>0.0190</td></tr>
      <tr><td>0.2</td><td>5.29 &times; 10<sup>-6</sup></td><td>1.70 &times; 10<sup>-4</sup></td><td>128</td><td>0.0313</td></tr>
      <tr><td>0.3</td><td>2.62 &times; 10<sup>-6</sup></td><td>4.09 &times; 10<sup>-4</sup></td><td>32</td><td>0.0365</td></tr>
      <tr><td>0.0</td><td>4.99 &times; 10<sup>-6</sup></td><td>9.41 &times; 10<sup>-4</sup></td><td>32</td><td>0.0176</td></tr>
      <tr><td>0.0</td><td>7.11 &times; 10<sup>-4</sup></td><td>2.37 &times; 10<sup>-4</sup></td><td>128</td><td>0.0185</td></tr>
      <tr><td>0.3</td><td>3.25 &times; 10<sup>-6</sup></td><td>4.05 &times; 10<sup>-4</sup></td><td>64</td><td>0.0395</td></tr>
      <tr><td>0.2</td><td>3.97 &times; 10<sup>-6</sup></td><td>6.10 &times; 10<sup>-4</sup></td><td>64</td><td>0.0279</td></tr>
      <tr><td>0.3</td><td>2.51 &times; 10<sup>-5</sup></td><td>9.62 &times; 10<sup>-4</sup></td><td>128</td><td>0.0379</td></tr>
      <tr><td>0.3</td><td>6.17 &times; 10<sup>-5</sup></td><td>6.02 &times; 10<sup>-4</sup></td><td>32</td><td>0.0378</td></tr>
      <tr><td>0.3</td><td>3.06 &times; 10<sup>-5</sup></td><td>1.32 &times; 10<sup>-4</sup></td><td>64</td><td>0.0385</td></tr>
      <tr><td>0.2</td><td>5.05 &times; 10<sup>-5</sup></td><td>1.61 &times; 10<sup>-4</sup></td><td>128</td><td>0.0284</td></tr>
      <tr><td>0.0</td><td>1.01 &times; 10<sup>-6</sup></td><td>8.68 &times; 10<sup>-4</sup></td><td>64</td><td>0.0182</td></tr>
      <tr><td>0.3</td><td>2.68 &times; 10<sup>-6</sup></td><td>2.16 &times; 10<sup>-4</sup></td><td>128</td><td>0.0407</td></tr>
      <tr><td>0.3</td><td>8.20 &times; 10<sup>-6</sup></td><td>6.43 &times; 10<sup>-4</sup></td><td>32</td><td>0.0391</td></tr>
      <tr><td>0.0</td><td>6.71 &times; 10<sup>-4</sup></td><td>1.03 &times; 10<sup>-4</sup></td><td>32</td><td>0.0189</td></tr>
      <tr><td>0.0</td><td>8.61 &times; 10<sup>-6</sup></td><td>4.60 &times; 10<sup>-4</sup></td><td>128</td><td>0.0181</td></tr>
    </tbody>
  </table>
  <figcaption>Resultados de la búsqueda aleatoria de hiperparámetros en la estación Escuelas Aguirre en el horizonte de una hora.</figcaption>
</figure>

<figure class="thesis-table" id="tbl-random-search-lstm-h24">
  <table class="thesis-table__table">
    <thead>
      <tr class="header-row">
        <th>Dropout</th>
        <th>&ell;<sub>2</sub></th>
        <th>Tasa de aprendizaje</th>
        <th>Unidades LSTM</th>
        <th>Pérdida</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0.2</td><td>1.17 &times; 10<sup>-6</sup></td><td>1.02 &times; 10<sup>-4</sup></td><td>128</td><td>0.0414</td></tr>
      <tr><td>0.3</td><td>1.49 &times; 10<sup>-5</sup></td><td>1.49 &times; 10<sup>-4</sup></td><td>32</td><td>0.0499</td></tr>
      <tr><td>0.0</td><td>1.49 &times; 10<sup>-6</sup></td><td>1.43 &times; 10<sup>-4</sup></td><td>64</td><td>0.0369</td></tr>
      <tr><td>0.0</td><td>8.18 &times; 10<sup>-6</sup></td><td>1.53 &times; 10<sup>-4</sup></td><td>64</td><td>0.0371</td></tr>
      <tr><td>0.0</td><td>8.12 &times; 10<sup>-4</sup></td><td>1.05 &times; 10<sup>-4</sup></td><td>32</td><td>0.0384</td></tr>
      <tr><td>0.2</td><td>5.29 &times; 10<sup>-6</sup></td><td>1.70 &times; 10<sup>-4</sup></td><td>128</td><td>0.0427</td></tr>
      <tr><td>0.3</td><td>2.62 &times; 10<sup>-6</sup></td><td>4.09 &times; 10<sup>-4</sup></td><td>32</td><td>0.0475</td></tr>
      <tr><td>0.0</td><td>4.99 &times; 10<sup>-6</sup></td><td>9.41 &times; 10<sup>-4</sup></td><td>32</td><td>0.0373</td></tr>
      <tr><td>0.0</td><td>7.11 &times; 10<sup>-4</sup></td><td>2.37 &times; 10<sup>-4</sup></td><td>128</td><td>0.0388</td></tr>
      <tr><td>0.3</td><td>3.25 &times; 10<sup>-6</sup></td><td>4.05 &times; 10<sup>-4</sup></td><td>64</td><td>0.0505</td></tr>
      <tr><td>0.2</td><td>3.97 &times; 10<sup>-6</sup></td><td>6.10 &times; 10<sup>-4</sup></td><td>64</td><td>0.0424</td></tr>
      <tr><td>0.3</td><td>2.51 &times; 10<sup>-5</sup></td><td>9.62 &times; 10<sup>-4</sup></td><td>128</td><td>0.0478</td></tr>
      <tr><td>0.3</td><td>6.17 &times; 10<sup>-5</sup></td><td>6.02 &times; 10<sup>-4</sup></td><td>32</td><td>0.0467</td></tr>
      <tr><td>0.3</td><td>3.06 &times; 10<sup>-5</sup></td><td>1.32 &times; 10<sup>-4</sup></td><td>64</td><td>0.0506</td></tr>
      <tr><td>0.2</td><td>5.05 &times; 10<sup>-5</sup></td><td>1.61 &times; 10<sup>-4</sup></td><td>128</td><td>0.0441</td></tr>
      <tr><td>0.0</td><td>1.01 &times; 10<sup>-6</sup></td><td>8.68 &times; 10<sup>-4</sup></td><td>64</td><td>0.0370</td></tr>
      <tr><td>0.3</td><td>2.68 &times; 10<sup>-6</sup></td><td>2.16 &times; 10<sup>-4</sup></td><td>128</td><td>0.0484</td></tr>
      <tr><td>0.3</td><td>8.20 &times; 10<sup>-6</sup></td><td>6.43 &times; 10<sup>-4</sup></td><td>32</td><td>0.0474</td></tr>
      <tr><td>0.0</td><td>6.71 &times; 10<sup>-4</sup></td><td>1.03 &times; 10<sup>-4</sup></td><td>32</td><td>0.0388</td></tr>
      <tr><td>0.0</td><td>8.61 &times; 10<sup>-6</sup></td><td>4.60 &times; 10<sup>-4</sup></td><td>128</td><td>0.0378</td></tr>
    </tbody>
  </table>
  <figcaption>Resultados de la búsqueda aleatoria de hiperparámetros en la estación Escuelas Aguirre en el horizonte de 24 horas.</figcaption>
</figure>

### Modelo GCN--LSTM

<figure class="thesis-table" id="tbl-random-search-gcnlstm-h1">
  <table class="thesis-table__table">
    <thead>
      <tr class="header-row">
        <th>Dropout</th>
        <th>&ell;<sub>2</sub></th>
        <th>Tasa de aprendizaje</th>
        <th>Unid. GCN</th>
        <th>Unid. LSTM</th>
        <th>Pérdida</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0.0</td><td>8.20 &times; 10<sup>-6</sup></td><td>6.43 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0169</td></tr>
      <tr><td>0.0</td><td>5.14 &times; 10<sup>-6</sup></td><td>5.92 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0173</td></tr>
      <tr><td>0.2</td><td>3.27 &times; 10<sup>-6</sup></td><td>4.80 &times; 10<sup>-4</sup></td><td>128</td><td>64</td><td>0.0218</td></tr>
      <tr><td>0.3</td><td>2.51 &times; 10<sup>-5</sup></td><td>9.62 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0249</td></tr>
      <tr><td>0.0</td><td>2.91 &times; 10<sup>-6</sup></td><td>3.55 &times; 10<sup>-4</sup></td><td>32</td><td>64</td><td>0.0196</td></tr>
      <tr><td>0.2</td><td>9.44 &times; 10<sup>-6</sup></td><td>6.01 &times; 10<sup>-4</sup></td><td>64</td><td>128</td><td>0.0187</td></tr>
      <tr><td>0.3</td><td>6.17 &times; 10<sup>-5</sup></td><td>6.02 &times; 10<sup>-4</sup></td><td>128</td><td>64</td><td>0.0228</td></tr>
      <tr><td>0.0</td><td>6.87 &times; 10<sup>-6</sup></td><td>2.44 &times; 10<sup>-4</sup></td><td>64</td><td>128</td><td>0.0204</td></tr>
      <tr><td>0.2</td><td>1.95 &times; 10<sup>-6</sup></td><td>4.13 &times; 10<sup>-4</sup></td><td>32</td><td>32</td><td>0.0226</td></tr>
      <tr><td>0.3</td><td>3.06 &times; 10<sup>-5</sup></td><td>1.32 &times; 10<sup>-4</sup></td><td>32</td><td>128</td><td>0.0261</td></tr>
      <tr><td>0.0</td><td>7.01 &times; 10<sup>-6</sup></td><td>5.10 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0175</td></tr>
      <tr><td>0.2</td><td>3.97 &times; 10<sup>-6</sup></td><td>6.10 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0191</td></tr>
      <tr><td>0.3</td><td>2.62 &times; 10<sup>-6</sup></td><td>4.09 &times; 10<sup>-4</sup></td><td>32</td><td>64</td><td>0.0237</td></tr>
      <tr><td>0.0</td><td>1.49 &times; 10<sup>-6</sup></td><td>1.43 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0190</td></tr>
      <tr><td>0.2</td><td>5.29 &times; 10<sup>-6</sup></td><td>1.70 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0212</td></tr>
      <tr><td>0.3</td><td>1.49 &times; 10<sup>-5</sup></td><td>1.49 &times; 10<sup>-4</sup></td><td>64</td><td>32</td><td>0.0240</td></tr>
      <tr><td>0.0</td><td>1.01 &times; 10<sup>-6</sup></td><td>8.68 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0182</td></tr>
      <tr><td>0.2</td><td>5.05 &times; 10<sup>-5</sup></td><td>1.61 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0221</td></tr>
      <tr><td>0.3</td><td>8.20 &times; 10<sup>-6</sup></td><td>6.43 &times; 10<sup>-4</sup></td><td>32</td><td>64</td><td>0.0219</td></tr>
      <tr><td>0.0</td><td>6.71 &times; 10<sup>-4</sup></td><td>1.03 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0278</td></tr>
    </tbody>
  </table>
  <figcaption>Resultados de la búsqueda aleatoria de hiperparámetros para el modelo GCN--LSTM en el horizonte de una hora.</figcaption>
</figure>

<figure class="thesis-table" id="tbl-random-search-gcnlstm-h24">
  <table class="thesis-table__table">
    <thead>
      <tr class="header-row">
        <th>Dropout</th>
        <th>&ell;<sub>2</sub></th>
        <th>Tasa de aprendizaje</th>
        <th>Unid. GCN</th>
        <th>Unid. LSTM</th>
        <th>Pérdida</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0.0</td><td>1.37 &times; 10<sup>-6</sup></td><td>1.57 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0348</td></tr>
      <tr><td>0.0</td><td>8.20 &times; 10<sup>-6</sup></td><td>2.04 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0352</td></tr>
      <tr><td>0.2</td><td>3.11 &times; 10<sup>-6</sup></td><td>3.89 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0387</td></tr>
      <tr><td>0.3</td><td>2.45 &times; 10<sup>-6</sup></td><td>4.61 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0406</td></tr>
      <tr><td>0.0</td><td>4.92 &times; 10<sup>-6</sup></td><td>4.76 &times; 10<sup>-4</sup></td><td>32</td><td>64</td><td>0.0379</td></tr>
      <tr><td>0.2</td><td>6.45 &times; 10<sup>-6</sup></td><td>5.88 &times; 10<sup>-4</sup></td><td>128</td><td>64</td><td>0.0391</td></tr>
      <tr><td>0.3</td><td>1.05 &times; 10<sup>-5</sup></td><td>6.72 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0435</td></tr>
      <tr><td>0.0</td><td>2.71 &times; 10<sup>-6</sup></td><td>2.98 &times; 10<sup>-4</sup></td><td>32</td><td>128</td><td>0.0395</td></tr>
      <tr><td>0.2</td><td>9.81 &times; 10<sup>-6</sup></td><td>1.92 &times; 10<sup>-4</sup></td><td>128</td><td>64</td><td>0.0374</td></tr>
      <tr><td>0.3</td><td>7.06 &times; 10<sup>-6</sup></td><td>1.79 &times; 10<sup>-4</sup></td><td>64</td><td>128</td><td>0.0410</td></tr>
      <tr><td>0.0</td><td>5.32 &times; 10<sup>-6</sup></td><td>3.27 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0368</td></tr>
      <tr><td>0.2</td><td>2.03 &times; 10<sup>-6</sup></td><td>4.13 &times; 10<sup>-4</sup></td><td>32</td><td>32</td><td>0.0412</td></tr>
      <tr><td>0.3</td><td>4.66 &times; 10<sup>-6</sup></td><td>3.55 &times; 10<sup>-4</sup></td><td>32</td><td>64</td><td>0.0420</td></tr>
      <tr><td>0.0</td><td>7.14 &times; 10<sup>-6</sup></td><td>1.85 &times; 10<sup>-4</sup></td><td>64</td><td>128</td><td>0.0359</td></tr>
      <tr><td>0.2</td><td>1.92 &times; 10<sup>-6</sup></td><td>2.44 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0365</td></tr>
      <tr><td>0.3</td><td>9.44 &times; 10<sup>-6</sup></td><td>2.16 &times; 10<sup>-4</sup></td><td>128</td><td>64</td><td>0.0415</td></tr>
      <tr><td>0.0</td><td>1.01 &times; 10<sup>-6</sup></td><td>8.68 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0392</td></tr>
      <tr><td>0.2</td><td>5.05 &times; 10<sup>-5</sup></td><td>1.61 &times; 10<sup>-4</sup></td><td>128</td><td>128</td><td>0.0446</td></tr>
      <tr><td>0.3</td><td>3.06 &times; 10<sup>-5</sup></td><td>1.32 &times; 10<sup>-4</sup></td><td>32</td><td>128</td><td>0.0461</td></tr>
      <tr><td>0.0</td><td>6.71 &times; 10<sup>-4</sup></td><td>1.03 &times; 10<sup>-4</sup></td><td>64</td><td>64</td><td>0.0488</td></tr>
    </tbody>
  </table>
  <figcaption>Resultados de la búsqueda aleatoria de hiperparámetros para el modelo GCN--LSTM en el horizonte de 24 horas.</figcaption>
</figure>

## Resultados gráficos

Este Apéndice presenta gráficos adicionales de la predicción en horizontes de una y 24 horas para los distintos modelos en una estación urbana fondo y una suburbana.

### Estaciones suburbanas

#### LSTM

<div class="appendix-image-row">
  <img src="img/pm2.5_1h_casacampo.png" width="280"/>
  <img src="img/no2_1h_casacampo.png" width="280"/>
  <img src="img/o3_1h_casacampo.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una hora del modelo LSTM en la estación suburbana Casa de Campo.</em></p>

<div class="appendix-image-row">
  <img src="img/lstm_e24_24h_pm2.5.png" width="280"/>
  <img src="img/lstm_24_24h_o3.png" width="280"/>
  <img src="img/lstm_e24_24h_no2.png" width="280"/>
</div>
<p><em>Figura: Predicciones a 24 horas del modelo LSTM en la estación suburbana Casa de Campo.</em></p>

#### GCN--LSTM

<div class="appendix-image-row">
  <img src="img/pm2.5_1h_casacampo.png" width="280"/>
  <img src="img/h1_no2_e24_full_sequence.png" width="280"/>
  <img src="img/h1_o3_e24_full_sequence.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una hora del modelo GCN--LSTM en la estación suburbana Casa de Campo.</em></p>

<div class="appendix-image-row">
  <img src="img/gcn_e24_24h_pm2.5.png" width="280"/>
  <img src="img/gcn_e24_24h_no2.png" width="280"/>
  <img src="img/gcn_e24_24h_o3.png" width="280"/>
</div>
<p><em>Figura: Predicciones a 24 horas del modelo GCN--LSTM en la estación suburbana Casa de Campo.</em></p>

### Estaciones urbanas fondo

#### LSTM

<div class="appendix-image-row">
  <img src="img/no2_1h_ensanche.png" width="280"/>
  <img src="img/o3_1h_ensanche.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una hora del modelo LSTM en la estación urbana fondo Ensanche de Vallecas.</em></p>

<div class="appendix-image-row">
  <img src="img/no2_e54_24h.png" width="280"/>
  <img src="img/o3_e54_24h.png" width="280"/>
</div>
<p><em>Figura: Predicciones a 24 horas del modelo LSTM en la estación urbana fondo Ensanche de Vallecas.</em></p>

<div class="appendix-image-row">
  <img src="img/PM2.5_1h_lstm.png" width="280"/>
  <img src="img/ensanhce_pm2.4_24h.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una y 24 horas del modelo LSTM en la estación urbana fondo Sanchinarro.</em></p>

#### GCN--LSTM

<div class="appendix-image-row">
  <img src="img/h1_no2_e54_full_sequence.png" width="280"/>
  <img src="img/h1_o3_e54_full_sequence.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una hora del modelo GCN--LSTM en la estación urbana fondo Ensanche de Vallecas.</em></p>

<div class="appendix-image-row">
  <img src="img/gcn_e54_24h_no2.png" width="280"/>
  <img src="img/gcn_e54_24h_o3.png" width="280"/>
</div>
<p><em>Figura: Predicciones a 24 horas del modelo GCN--LSTM en la estación urbana fondo Ensanche de Vallecas.</em></p>

<div class="appendix-image-row">
  <img src="img/gcn_e57_1h_pm2.5.png" width="280"/>
  <img src="img/gcn_e57_24h_pm2.5.png" width="280"/>
</div>
<p><em>Figura: Predicciones a una y 24 horas del modelo GCN--LSTM en la estación urbana fondo Sanchinarro.</em></p>

## MAE y RMSE por estación

### PM<sub>2.5</sub>

<figure class="thesis-table" id="tbl-metricas-estaciones-pm25">
  <table class="thesis-table__table">
    <thead>
      <tr class="group-row">
        <th rowspan="3">Estación</th>
        <th colspan="4" class="group-head">1 h</th>
        <th colspan="4" class="group-head">24 h</th>
      </tr>
      <tr class="group-row">
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
      </tr>
      <tr class="header-row">
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>8</td><td>2.81</td><td>3.62</td><td>3.36</td><td>4.09</td><td>5.31</td><td>6.50</td><td>4.77</td><td>6.05</td></tr>
      <tr><td>24</td><td>1.72</td><td>2.33</td><td>2.38</td><td>2.73</td><td>3.01</td><td>3.88</td><td>3.46</td><td>4.78</td></tr>
      <tr><td>38</td><td>2.17</td><td>2.89</td><td>2.63</td><td>3.01</td><td>4.52</td><td>5.65</td><td>4.12</td><td>5.68</td></tr>
      <tr><td>47</td><td>2.17</td><td>2.80</td><td>2.74</td><td>3.78</td><td>3.82</td><td>4.73</td><td>3.84</td><td>5.19</td></tr>
      <tr><td>48</td><td>3.79</td><td>6.23</td><td>4.19</td><td>6.68</td><td>5.70</td><td>8.62</td><td>5.21</td><td>7.82</td></tr>
      <tr><td>50</td><td>3.46</td><td>4.79</td><td>3.98</td><td>5.61</td><td>7.17</td><td>8.09</td><td>6.82</td><td>7.36</td></tr>
      <tr><td>56</td><td>3.02</td><td>4.22</td><td>3.26</td><td>4.77</td><td>4.79</td><td>6.15</td><td>4.76</td><td>6.12</td></tr>
      <tr><td>57</td><td>2.12</td><td>2.84</td><td>2.93</td><td>3.68</td><td>4.47</td><td>5.44</td><td>4.35</td><td>5.07</td></tr>
    </tbody>
  </table>
  <figcaption>MAE y RMSE para PM<sub>2.5</sub> en todas las estaciones para horizontes de una y 24 horas (&mu;g/m<sup>3</sup>).</figcaption>
</figure>

### NO<sub>2</sub>

<figure class="thesis-table" id="tbl-metricas-estaciones-no2">
  <table class="thesis-table__table">
    <thead>
      <tr class="group-row">
        <th rowspan="3">Estación</th>
        <th colspan="4" class="group-head">1 h</th>
        <th colspan="4" class="group-head">24 h</th>
      </tr>
      <tr class="group-row">
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
      </tr>
      <tr class="header-row">
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>4</td><td>5.39</td><td>7.60</td><td>7.26</td><td>8.51</td><td>13.91</td><td>16.62</td><td>12.46</td><td>15.27</td></tr>
      <tr><td>8</td><td>5.47</td><td>7.80</td><td>6.26</td><td>8.92</td><td>11.89</td><td>15.60</td><td>10.94</td><td>15.75</td></tr>
      <tr><td>11</td><td>6.77</td><td>9.51</td><td>7.91</td><td>10.11</td><td>16.02</td><td>19.25</td><td>14.69</td><td>17.39</td></tr>
      <tr><td>16</td><td>4.32</td><td>6.11</td><td>5.23</td><td>7.24</td><td>9.78</td><td>12.69</td><td>9.58</td><td>12.28</td></tr>
      <tr><td>17</td><td>5.90</td><td>7.71</td><td>6.37</td><td>8.23</td><td>16.24</td><td>20.91</td><td>17.00</td><td>21.00</td></tr>
      <tr><td>18</td><td>5.30</td><td>7.57</td><td>6.16</td><td>8.47</td><td>12.04</td><td>16.53</td><td>11.63</td><td>15.36</td></tr>
      <tr><td>24</td><td>4.36</td><td>6.33</td><td>5.71</td><td>7.85</td><td>10.21</td><td>12.10</td><td>9.98</td><td>11.52</td></tr>
      <tr><td>27</td><td>7.54</td><td>9.29</td><td>8.45</td><td>10.55</td><td>13.83</td><td>17.31</td><td>12.93</td><td>16.85</td></tr>
      <tr><td>35</td><td>5.88</td><td>8.07</td><td>6.38</td><td>8.56</td><td>11.99</td><td>15.13</td><td>12.51</td><td>15.65</td></tr>
      <tr><td>36</td><td>5.72</td><td>7.90</td><td>6.25</td><td>8.70</td><td>14.17</td><td>16.67</td><td>13.42</td><td>15.21</td></tr>
      <tr><td>38</td><td>6.07</td><td>8.67</td><td>6.72</td><td>9.73</td><td>14.25</td><td>18.73</td><td>13.47</td><td>17.58</td></tr>
      <tr><td>39</td><td>5.82</td><td>8.46</td><td>5.96</td><td>8.97</td><td>12.01</td><td>15.26</td><td>11.80</td><td>15.60</td></tr>
      <tr><td>40</td><td>6.19</td><td>8.69</td><td>7.58</td><td>9.02</td><td>16.06</td><td>18.06</td><td>13.52</td><td>17.88</td></tr>
      <tr><td>47</td><td>5.30</td><td>7.70</td><td>6.29</td><td>8.68</td><td>12.57</td><td>15.39</td><td>13.05</td><td>16.79</td></tr>
      <tr><td>48</td><td>5.05</td><td>6.97</td><td>6.03</td><td>7.94</td><td>12.14</td><td>16.37</td><td>11.89</td><td>15.26</td></tr>
      <tr><td>49</td><td>5.96</td><td>7.47</td><td>6.24</td><td>8.65</td><td>10.27</td><td>13.03</td><td>9.55</td><td>11.95</td></tr>
      <tr><td>50</td><td>5.15</td><td>7.05</td><td>7.83</td><td>8.12</td><td>13.41</td><td>15.44</td><td>11.87</td><td>14.89</td></tr>
      <tr><td>54</td><td>7.69</td><td>9.34</td><td>8.73</td><td>10.58</td><td>15.87</td><td>19.91</td><td>14.02</td><td>17.99</td></tr>
      <tr><td>55</td><td>7.88</td><td>9.56</td><td>9.51</td><td>10.84</td><td>16.77</td><td>18.95</td><td>13.69</td><td>17.94</td></tr>
      <tr><td>56</td><td>6.09</td><td>8.48</td><td>7.24</td><td>9.98</td><td>15.30</td><td>18.98</td><td>14.41</td><td>18.10</td></tr>
      <tr><td>57</td><td>5.52</td><td>7.95</td><td>6.17</td><td>9.14</td><td>12.89</td><td>16.72</td><td>13.09</td><td>16.49</td></tr>
      <tr><td>58</td><td>3.08</td><td>4.52</td><td>4.66</td><td>5.85</td><td>6.72</td><td>8.07</td><td>5.77</td><td>7.52</td></tr>
      <tr><td>59</td><td>6.15</td><td>8.78</td><td>7.68</td><td>10.95</td><td>12.58</td><td>15.17</td><td>13.48</td><td>14.95</td></tr>
      <tr><td>60</td><td>5.17</td><td>7.26</td><td>5.68</td><td>8.18</td><td>11.87</td><td>15.28</td><td>11.86</td><td>16.50</td></tr>
    </tbody>
  </table>
  <figcaption>MAE y RMSE para NO<sub>2</sub> en todas las estaciones para horizontes de una y 24 horas (&mu;g/m<sup>3</sup>).</figcaption>
</figure>

### O<sub>3</sub>

<figure class="thesis-table" id="tbl-metricas-estaciones-o3">
  <table class="thesis-table__table">
    <thead>
      <tr class="group-row">
        <th rowspan="3">Estación</th>
        <th colspan="4" class="group-head">1 h</th>
        <th colspan="4" class="group-head">24 h</th>
      </tr>
      <tr class="group-row">
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
        <th colspan="2" class="group-head">LSTM</th>
        <th colspan="2" class="group-head">GCN--LSTM</th>
      </tr>
      <tr class="header-row">
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
        <th>MAE</th><th>RMSE</th><th>MAE</th><th>RMSE</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>8</td><td>4.94</td><td>6.80</td><td>6.05</td><td>8.16</td><td>12.38</td><td>15.21</td><td>11.58</td><td>13.99</td></tr>
      <tr><td>16</td><td>5.57</td><td>7.72</td><td>6.57</td><td>8.75</td><td>12.81</td><td>15.76</td><td>11.98</td><td>14.45</td></tr>
      <tr><td>17</td><td>5.22</td><td>7.95</td><td>6.41</td><td>8.01</td><td>16.10</td><td>19.51</td><td>15.94</td><td>19.23</td></tr>
      <tr><td>18</td><td>5.50</td><td>8.21</td><td>5.91</td><td>9.09</td><td>13.97</td><td>17.51</td><td>12.89</td><td>16.07</td></tr>
      <tr><td>24</td><td>5.33</td><td>7.93</td><td>6.16</td><td>8.36</td><td>15.91</td><td>19.40</td><td>15.51</td><td>18.85</td></tr>
      <tr><td>27</td><td>6.47</td><td>9.05</td><td>7.40</td><td>9.86</td><td>15.77</td><td>19.08</td><td>14.92</td><td>17.83</td></tr>
      <tr><td>35</td><td>5.67</td><td>7.90</td><td>6.40</td><td>8.17</td><td>14.97</td><td>18.05</td><td>14.05</td><td>17.13</td></tr>
      <tr><td>39</td><td>5.96</td><td>8.36</td><td>6.73</td><td>9.38</td><td>16.10</td><td>18.36</td><td>15.30</td><td>17.80</td></tr>
      <tr><td>49</td><td>5.87</td><td>8.13</td><td>6.95</td><td>9.25</td><td>15.89</td><td>19.12</td><td>15.81</td><td>19.06</td></tr>
      <tr><td>54</td><td>5.92</td><td>8.44</td><td>6.44</td><td>9.25</td><td>15.90</td><td>18.67</td><td>14.73</td><td>16.97</td></tr>
      <tr><td>58</td><td>5.32</td><td>7.87</td><td>5.92</td><td>8.56</td><td>14.85</td><td>17.66</td><td>13.19</td><td>16.35</td></tr>
      <tr><td>59</td><td>5.87</td><td>8.07</td><td>6.67</td><td>9.11</td><td>15.28</td><td>18.47</td><td>13.90</td><td>17.17</td></tr>
      <tr><td>60</td><td>6.00</td><td>8.69</td><td>7.03</td><td>9.43</td><td>15.80</td><td>19.11</td><td>15.49</td><td>19.58</td></tr>
    </tbody>
  </table>
  <figcaption>MAE y RMSE para O<sub>3</sub> en todas las estaciones para horizontes de una y 24 horas (&mu;g/m<sup>3</sup>).</figcaption>
</figure>
