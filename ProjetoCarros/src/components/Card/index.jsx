import styles from './Card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ name, description, foto }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <img src={foto} className={styles.foto}/>
            <p className={styles.desc}>{description} </p>
        </section>
    )
}

export default Card