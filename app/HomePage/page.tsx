import React from 'react';
import styles from "./HomePage.module.css"
import ResultadoPesquisa from '../components/ResultadoPesquisa';

const HomePage = () => {
  return (
  <div className={styles.page}>
    <h1>Previsão do Tempo</h1>
    <ResultadoPesquisa/>
    <div className={styles.searchbar}>
        
        <input type='text' placeholder='Insira aqui a cidade'/>
        <button>
        <img src="/assets/procurar.svg" alt="Ícone de procurar" width={24} height={24} />      
        </button>
    </div>
</div>
)}

export default HomePage;