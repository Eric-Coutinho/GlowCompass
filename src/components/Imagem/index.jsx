import styles from './styles.module.css'

export default function Imagem({ path }) {
    return(
        <img src={path} className={styles.img}></img>
    )
}