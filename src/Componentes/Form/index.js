import { styled } from "styled-components"
import CampoForm from "../CampoForm"
import ListaSuspensa from "../ListaSuspensa"
import Button from "../Button"
import { BsFillPersonBadgeFill } from "react-icons/bs"
import { useState } from "react"

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

    const [nome, setNome] = useState("")
    const [posicao, setPosicao] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const formSubmit =(e) => {
        e.preventDefault()
        console.log([nome, posicao,imagem, time]);
    }

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]

    return(
        <DivContainer>
            <form onSubmit={formSubmit}>
                <h2>Preencha os dados para criar card do jogador</h2>
                <CampoForm label="Nome" required={true}
                    valor={nome} 
                    inputAlterado={valor => setNome(valor)} 
                    placeholder="Digite seu nome..." />

                <CampoForm label="Posição" required={true} 
                    valor={posicao} 
                    inputAlterado={valor => setPosicao(valor)} 
                    placeholder="Digite sua posição..." />
                    
                <CampoForm label="Imagem" required={true} 
                    valor={imagem} 
                    inputAlterado={valor =>  setImagem(valor)} 
                    placeholder="Indique o endereço da imagem..." />

                <ListaSuspensa label="Times" required={true} itens={times} valor={time} listaAlterada={valor => setTime(valor)}/>

                <Button> Crie seu card <BsFillPersonBadgeFill/> </Button>
            </form>
        </DivContainer>
    )
}

export default Form