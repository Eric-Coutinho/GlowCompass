import styles from './styles.module.css'

export default function FormCard({ path, children }) {
    return (
        <form action={path}>
            { children }
        </form>
    );
}