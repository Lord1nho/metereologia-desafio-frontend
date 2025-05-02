"use client"

import React, { useEffect, useState } from 'react';
import styles from "./CapitaisInfo.module.css"

const CapitaisInfo = () => {


  const [clima, setClima] = useState(null);
  const [erro, setErro] = useState(null);
  const [capitais, setCapitais] = useState([
    { cidade: 'Rio de Janeiro', min: '', max: '' },
    { cidade: 'São Paulo', min: '', max: '' },
    { cidade: 'Belo Horizonte',min: '', max: ''  },
    { cidade: 'Brasília', min: '', max: ''  },
    { cidade: 'Belém', min: '', max: ''  },
    { cidade: 'Salvador', min: '', max: ''  },
    { cidade: 'Curitiba', min: '', max: ''  },
    { cidade: 'Fortaleza', min: '', max: ''  },
    { cidade: 'Manaus', min: '', max: ''  },
    { cidade: 'João Pessoa', min: '', max: ''  },
  ]);


  useEffect(() => {
    const buscarClima = async () => {
      const API_KEY = 'da3d06defac28e58b1559b364de4bee6';
  
      try {
        const response = await Promise.all(
          capitais.map(async (capitais) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitais.cidade}&appid=${API_KEY}&units=metric&lang=pt_br` 
            const response = await fetch(url);
            if (!response.ok) throw new Error("ERRO");
            const dados = await response.json();
            return {
              ...capitais,
              min: `${Math.round(dados.main.temp_min)}`,
              max: `${Math.round(dados.main.temp_max)}`
            }
          })
        );
        setCapitais(response);
      } catch (error) {
        setErro('Erro ao buscar clima');
        setClima(null);
      }
  
    };
    buscarClima(); // ou acione via botão
  }, []);

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