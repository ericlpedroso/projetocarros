import styles from './Container.module.css'
import PropTypes from 'prop-types'

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container

Container.propTypes = {
    children: PropTypes.any
  }.isRequired