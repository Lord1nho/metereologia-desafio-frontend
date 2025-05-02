"use client"

import React, { useEffect, useState } from 'react';
import styles from "./ResultadoPesquisa.module.css"


const ResultadoPesquisa = () => {

    const temperaturas = [
        { diaSemana: 'Terça', min: '18°', max: '27°' },
        { diaSemana: 'Quarta', min: '14°', max: '22°' },
        { diaSemana: 'Quinta', min: '21°', max: '32°' },
        { diaSemana: 'Sexta', min: '24°', max: '37°' },
      ];

  return (
  <div className={styles.resultbox}>
    <div className={styles.city}>
        <p>Lorem Ipsum, RJ - Brasil</p>
        <button><img src="/assets/cruz.svg" alt="Ícone de procurar" width={8} height={12}/></button>
    </div>
    <div className={styles.details}>
    <p>20°C Nublado</p>
    <div className={styles.details2}>
        <p>16°C</p>
        <p>25°C</p>
        <p>Sensação: 19°C</p>
    </div>
    <div className={styles.details2}>
        <p>Vento: 18km</p>
        <p>Umidade: 89%</p>
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