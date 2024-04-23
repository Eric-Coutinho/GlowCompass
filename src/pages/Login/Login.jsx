import { Container, Col, Row } from "react-bootstrap";
import LoginCard from "../../components/LoginCardForm/LoginCard";

import styles from './styles.module.css'

export default function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={0} lg={5}><img src="/login.avif" className={styles.img}></img></Col>
                    <Col xs={0} lg={2}></Col>
                    <Col xs={12} lg={5}>
                        <LoginCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}