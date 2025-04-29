import React from 'react';
import styles from "./CapitaisInfo.module.css"

const CapitaisInfo = () => {

    const capitais = [
        { cidade: 'Rio de Janeiro', min: '18°', max: '27°' },
        { cidade: 'São Paulo', min: '14°', max: '22°' },
        { cidade: 'Belo Horizonte', min: '21°', max: '32°' },
        { cidade: 'Brasília', min: '24°', max: '37°' },
        { cidade: 'Belém', min: '24°', max: '37°' },
        { cidade: 'Salvador', min: '23°', max: '37°' },
        { cidade: 'Curitiba', min: '5°', max: '14°' },
        { cidade: 'Fortaleza', min: '21°', max: '32°' },
        { cidade: 'Manaus', min: '24°', max: '37°' },
        { cidade: 'João Pessoa', min: '28°', max: '40°' },
      ];
  return (
    <section className={styles.content}>
        <h2>Capitais</h2>
        <div className={styles.info_box}>
        <div className={styles.info}>
    <p className={styles.column}>Min</p>
    <p className={styles.column}>Max</p>
    <p className={styles.column}></p> 
    
    <p className={styles.column}>Min</p>
    <p className={styles.column}>Max</p>
    <p className={styles.column}></p> 

    {capitais.map((item, index) => (
      <React.Fragment key={index}>
        <p className={styles.data}>{item.min}</p>
        <p className={styles.data}>{item.max}</p>
        <p className={styles.data}>{item.cidade}</p>
      </React.Fragment>
    ))}
  </div>
        </div>
    </section>
)}

export default CapitaisInfo;