import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function Button({ type = 'submit', color = '#D4A373', textcolor = '#fff', children }) {
    const navigate = useNavigate();
    return (
        <button
            type={type}
            className={styles.btn}
            style={{
                backgroundColor: color,
                color: textcolor
            }}>
            {children}
        </button>
    );
}