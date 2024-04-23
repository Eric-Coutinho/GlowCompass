import styles from './styles.module.css';

export default function Button({ color, textcolor, children }) {
    return (
        <button
            className={styles.btn}
            style={{
                backgroundColor: color ? color : '#D4A373',
                color: textcolor ? textcolor : '#fff'
            }}>
            {children}
        </button>
    );
}