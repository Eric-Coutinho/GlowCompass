import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import Button from '../../components/Button/Button';
import FormCard from '../../components/FormCard/FormCard';

export default function FormSkin() {
    return (
        <>
            <main>
                <img src='produto verde.avif' />
                <FormCard path='/'>
                    <div>
                        <h1>Descubra o seu tipo de pele</h1>
                        <FloatingLabel className={styles.input} controlId="skinaspect" label="Aspecto da pele">
                            <Form.Control type="text" placeholder="Aspecto da pele" />
                        </FloatingLabel>
                        <FloatingLabel className={styles.input} controlId="age" label="Idade">
                            <Form.Control type="text" placeholder="Idade" />
                        </FloatingLabel>
                        <FloatingLabel className={styles.input} controlId="tzone" label="Zona-T">
                            <Form.Control type="text" placeholder="Zona-T" />
                        </FloatingLabel>
                        <FloatingLabel className={styles.input} controlId="sunscreen" label="Utiliza protetor solar?">
                            <Form.Control type="text" placeholder="Utiliza protetor solar?" />
                        </FloatingLabel>
                        <Button color='#9FAF75'>Enviar foto</Button>
                    </div>
                    <Button color='#D4A373'>Analisar</Button>
                </FormCard>
                <img src='produto rosa.avif' />
            </main>
        </>
    );
}