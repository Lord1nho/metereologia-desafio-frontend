"use client"

import React, { useEffect, useState } from 'react';
import styles from "./ResultadoPesquisa.module.css"


const ResultadoPesquisa = ({ dados, cidade}) => {

    const temperaturas = [
        { diaSemana: 'Terça', min: '18°', max: '27°' },
        { diaSemana: 'Quarta', min: '14°', max: '22°' },
        { diaSemana: 'Quinta', min: '21°', max: '32°' },
        { diaSemana: 'Sexta', min: '24°', max: '37°' },
      ];

      if (!dados) return null; // nada é exibido até que dados exista
  return (
  <div className={styles.resultbox}>
    <div className={styles.city}>
        <p>{cidade} - Brasil</p>
        <button><img src="/assets/cruz.svg" alt="Ícone de procurar" width={8} height={12}/></button>
    </div>
    <div className={styles.details}>
    <p>{Math.round(dados.temperatura)}°C {dados.tempo}</p>
    <div className={styles.details2}>
        <p>{Math.round(dados.minima)}°C</p>
        <p>{Math.round(dados.maxima)}°C</p>
        <p>Sensação: {Math.round(dados.sensacao)}°C</p>
    </div>
    <div className={styles.details2}>
        <p>Vento: {Math.round(dados.vento)}km/h</p>
        <p>Umidade: {Math.round(dados.umidade)}%</p>
    </div>
    </div>
    <div className={styles.bar}></div>
    <div className={styles.infoweek}>
  {temperaturas.map((item, index) => (
    <div key={index} className={styles.column}>
      <p>{item.diaSemana}</p>
      <p style={{ color: 'orange', fontWeight: '600' }}>16° 25°</p>
    </div>
    ))}
    </div>
    </div>
)}

export default ResultadoPesquisa;