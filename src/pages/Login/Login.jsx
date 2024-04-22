import { Container } from "react-bootstrap";
import LoginCard from "../../Components/LoginCardForm/LoginCard";

import styles from './styles.module.css'

export default function Login() {
    return (
        <>
            <Container className={styles.cont}>
                <LoginCard />
            </Container>
        </>
    )
}