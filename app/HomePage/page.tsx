import React from 'react';
import styles from "./HomePage.module.css"
import ResultadoPesquisa from '../components/ResultadoPesquisa';
import CapitaisInfo from '../components/CapitaisInfo';

const HomePage = () => {
  return (
  <div className={styles.page}>
    <h1>Previsão do Tempo</h1>
    <ResultadoPesquisa/>
    <div className={styles.searchbar}>
        
        <input type='text' placeholder='Insira aqui o nome da cidade'/>
        <button>
        <img src="/assets/procurar.svg" alt="Ícone de procurar" width={24} height={24} />      
        </button>
    </div>
    <div className={styles.bar}></div>
    <CapitaisInfo/>
</div>
)}

export default HomePage;