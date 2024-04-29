import { Container, Col, Row } from "react-bootstrap";

import Imagem from "../../components/Imagem/Imagem";
import styles from './styles.module.css'

export default function NotFound() {
    return (
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.ibagem}>
                <Imagem path="404.png" className={styles.ibagem} />
            </div>
        </Row>
    );
}
