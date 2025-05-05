"use client"

import React, { useState } from 'react';
import styles from "./HomePage.module.css"
import ResultadoPesquisa from '../components/ResultadoPesquisa';
import CapitaisInfo from '../components/CapitaisInfo';


const HomePage = () => {
  const [cidade, setCidade] = useState('');
  const [info, setInfo] = useState(null);
  
  const buscarCidade = async (cidade:string) => {
    try {
      const apiKey = 'da3d06defac28e58b1559b364de4bee6'
      const cidadereq = encodeURIComponent(cidade);
      const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidadereq}&appid=${apiKey}&lang=pt_br&units=metric`);
      console.log(response);
      const dados = await response.json();
      console.log(dados);
      const temperatura = dados.main.temp;
      const sensacao = dados.main.feels_like;
      const minima = dados.main.temp_min;
      const maxima = dados.main.temp_max;
      const vento = dados.wind.speed;
      const tempo = dados.weather[0].description;
      const umidade = dados.main.humidity;
      
      setInfo({
        temperatura,
        sensacao,
        minima,
        maxima,
        vento,
        tempo,
        umidade
      });
    }
    catch (err) {
      alert('ERRO');
    }
  }

  return (
  <div className={styles.page}>
    <h1>Previsão do Tempo</h1>
    <ResultadoPesquisa dados={info} cidade={cidade}/>
    <div className={styles.searchbar}>
    <input
        type="text"
        placeholder="Insira aqui o nome da cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
        <button onClick={() => buscarCidade(cidade)}>
        <img src="/assets/procurar.svg" alt="Ícone de procurar" width={24} height={24} />      
        </button>
    </div>
    <div className={styles.bar}></div>
    <CapitaisInfo/>
</div>
)}

export default HomePage;