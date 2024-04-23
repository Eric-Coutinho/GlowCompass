import { Container, Col, Row } from "react-bootstrap";
import LoginCard from "../../components/LoginCardForm/LoginCard";

import styles from './styles.module.css'
import Imagem from "../../components/Imagem/Imagem";

export default function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={5}><Imagem path="login.avif"/></Col>
                    <Col xs={0} lg={2}></Col>
                    <Col xs={12} lg={5}>
                        <LoginCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}