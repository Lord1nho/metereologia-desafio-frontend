"use client"

import React from 'react';
import styles from "./ResultadoPesquisa.module.css"

const ResultadoPesquisa = () => {
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
    </div>
)}

export default ResultadoPesquisa;