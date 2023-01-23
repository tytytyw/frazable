import { FC, useLayoutEffect, useState } from 'react'
import styles from "./Main.module.sass";
import ButtonGreen from '../ButtonGreen'
import classNames from 'classnames';

interface MainProps {
    headerRef: any
}

const Main: FC<MainProps> = ({ headerRef }) => {
    const [headerHeight, setHeaderHeight] = useState(0)

    useLayoutEffect(() => {
        setHeaderHeight(headerRef?.current?.clientHeight)
    }, [])

    return (
        <div>
            <section className={styles.section} style={headerHeight ? { height: `calc(100vh - ${headerHeight}px` } : {}}>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>
                        Evolve your sales<br /> game with Frazable
                    </h2>
                    <p className={styles.text}>
                        Frazable is the ultimate tool for sales teams, helping them efficiently
                        manage conversations. With Frazable, you can easily keep track of
                        your sales progress and close more deals.
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <p>Get your <strong>free account today</strong></p>
                        <div className={styles.buttons}>
                            <button className={styles.googleSingUp}>Sing Up with Google</button>
                            <span className={styles.separator}>or</span>
                            <ButtonGreen text={'Sing Up with email'} callback={() => { }}></ButtonGreen>
                        </div>
                        <p className={styles.smallText}>No Credit Card required</p>
                    </div>
                </div>
                <div className={styles.animationWrapper}>
                    animation
                </div>
            </section>
            <section className={classNames(styles.section, styles.section_two)}>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>
                        Manage your <br />conversation!
                    </h2>
                    <p className={styles.text}>
                        Frazable makes it easy for you to manage all of your
                        sales conversations in one place. Our software can
                        automatically extract important information from
                        conversations, such as contact information and
                        follow-up dates.
                    </p>
                </div>
                <div className={styles.animationWrapper}>
                    animation
                </div>
            </section>
        </div >
    )
}

export default Main