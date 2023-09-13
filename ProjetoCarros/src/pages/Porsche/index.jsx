import styles from './Porsche.module.css'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'

function Porsche() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/ericlpedroso/api-carros/main/porsche.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Porsche</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    modelo={repo.modelo}
                                    name={repo.nome}
                                    description={repo.modelo}
                                    foto={repo.foto}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Porsche