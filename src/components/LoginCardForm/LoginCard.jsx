import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function LoginCard() {
    return (
        <>
            <Card className={styles.card}>
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.title} as="h2">Login</Card.Title>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Senha">
                        <Form.Control type="password" placeholder="Senha" />
                    </FloatingLabel>
                    <div className={styles.recupera}>
                        <Link style={{ color: '#D4A373' }}>Recuperar Senha</Link>
                    </div>
                    <div className={styles.buttons}>
                        <div className="d-grid gap-2">

                            <Button className={styles.btn} style={{ marginBlock: '0.3em' }}>Entrar</Button>{' '}
                            <Button className={styles.btn} style={{ marginBottom: '0.5em' }}>Registrar-se</Button>{' '}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}