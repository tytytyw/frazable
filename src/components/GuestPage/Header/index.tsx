import styles from './Header.module.sass'
import ButtonGreen from '../ButtonGreen/index'

const Header = () => {
    return (
        <header className={styles.Header}>
            <nav className={styles.nav}>
                <div className={styles.link}>
                    <h1 className={styles.title}>Frazable.com</h1>
                </div>
                <div className={styles.link}><span>Use cases</span></div>
                <div className={styles.link}><span>Pricing</span></div>
                <div className={styles.link}><span>Weekly expos</span></div>
            </nav>

            <div className={styles.loginWrapper}>
                <div className={styles.loginWrapper__item}><span>login</span></div>
                <div className={styles.loginWrapper__item}>
                    <ButtonGreen text={"Get Started - it's free"} callback={() => { }} />
                </div>
            </div>
        </header>
    )
}

export default Header