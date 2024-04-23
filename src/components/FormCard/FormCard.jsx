import styles from './styles.module.css'

export default function FormCard({ children }) {
    return (
        <form>
            { children }
        </form>
    );
}