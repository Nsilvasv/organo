import { styled } from "styled-components"
import CampoForm from "../CampoForm"
import ListaSuspensa from "../ListaSuspensa"
import Button from "../Button"
import { BsFillPersonBadgeFill } from "react-icons/bs"

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 80px 0;

    form {
        max-width: 80%;
        background-color: #ffffff;
        border-radius: 20px;
        padding: 50px 50px;
        box-shadow: 6px 6px 26px rgba(100, 100, 100, 0.363);
    }
    
`

const Form = () => {
    return(
        <DivContainer>
            <form>
                <h2>Preencha os dados para criar card do jogador</h2>
                <CampoForm label="Nome" required={true} placeholder="Digite seu nome..."/>
                <CampoForm label="Nome" required={true} placeholder="Digite seu nome..."/>
                <CampoForm label="Nome" required={true} placeholder="Digite seu nome..."/>
                <ListaSuspensa label="Times"/>
                <Button> Crie seu card <BsFillPersonBadgeFill/> </Button>
            </form>
        </DivContainer>
    )
}

export default Form