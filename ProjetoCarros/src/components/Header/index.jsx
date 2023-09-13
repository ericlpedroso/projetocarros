import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>

            <nav>
                <Link className={styles.itens} to="/">Home</Link>
                <Link className={styles.itens} to="/bmw">BMW</Link>
                <Link className={styles.itens} to="/mercedes">Mercedes</Link>
                <Link className={styles.itens} to="/porsche">Porsche</Link>
            </nav>
        </header>
    )    
}

export default Header