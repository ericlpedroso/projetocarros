import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Mercedes.module.css'

function Mercedes() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/ericlpedroso/api-carros/main/mercedes.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Mercedes-Benz</h2>
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

export default Mercedes