import { useRef } from 'react'

import Header from './Header'
import Main from './Main'
import styles from './GuestPage.module.sass'

const GuestPage = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    return (
        <div className={styles.wrapper}>
            <section ref={headerRef} >
                <Header />
            </section>
            <section>
                <Main headerRef={headerRef} />
            </section>
        </div>
    )
}

export default GuestPage