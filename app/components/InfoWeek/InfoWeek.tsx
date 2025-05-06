import styles from "../ResultadoPesquisa.module.css"

const InfoWeek = () => {


    const temperaturas = [
        { diaSemana: 'Terça', min: '18°', max: '27°' },
        { diaSemana: 'Quarta', min: '14°', max: '22°' },
        { diaSemana: 'Quinta', min: '21°', max: '32°' },
        { diaSemana: 'Sexta', min: '24°', max: '37°' },
      ];

return (
    <div className={styles.infoweek}>
  {temperaturas.map((item, index) => (
    <div key={index} className={styles.column}>
      <p>{item.diaSemana}</p>
      <p style={{ color: 'orange', fontWeight: '600' }}>16° 25°</p>
    </div>
    ))}
    </div>
)
}

export default InfoWeek;