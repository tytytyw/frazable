import { FC } from 'react'
import styles from './ButtonGreen.module.sass'

interface ButtonGreenProps {
    text: string;
    callback: () => void
}

const ButtonGreen: FC<ButtonGreenProps> = ({ text, callback }) => {
    return (
        <div className={styles.button} onClick={callback}>{text}</div>
    )
}

export default ButtonGreen