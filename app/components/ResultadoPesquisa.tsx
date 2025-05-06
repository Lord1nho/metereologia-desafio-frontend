"use client"

import React, { useEffect, useState } from 'react';
import styles from "./ResultadoPesquisa.module.css"


const ResultadoPesquisa = ({ dados, onClose}) => {

      const formatTempo = (tempo:string) => {
        if (!tempo) return '';
        return tempo.charAt(0).toUpperCase() + tempo.slice(1).toLowerCase();
      }

      if (!dados) return null; // nada é exibido até que dados exista
  return (
  <div className={styles.resultbox}>
    <div className={styles.city}>
        <p>{dados.city} - {dados.country}</p>
        <button onClick={onClose}><img src="/assets/cruz.svg" alt="Fechar aba" width={8} height={12}/></button>
    </div>
    <div className={styles.details}>
    <p>{Math.round(dados.temperatura)}°C {formatTempo(dados.tempo)}</p>
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
    </div>
)
}

export default ResultadoPesquisa;