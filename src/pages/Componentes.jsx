import Nav from "../components/Nav/Nav";
import FormCard from "../components/FormCard/FormCard";
import LoginCard from "../components/LoginCardForm/LoginCard";
import Imagem from "../components/Imagem";

export default function Componentes() {
    return (
        <>
            <LoginCard />
            <FormCard />
            <Nav />
            <Imagem path="Glow Compass.png"/>
        </>
    )
}