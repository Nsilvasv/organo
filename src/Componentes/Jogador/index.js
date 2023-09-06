import { styled } from "styled-components"

const ContainerJogador = styled.div`
    width: 280px;
`
const DivIMg = styled.div`
    background-color:  #F0F0F0;
    border-radius: 10px 10px 0px 0px;

    img {
        width: 100px;
        border-radius: 50%;
        position: relative;
        bottom: -50px;
    }
`
const Rodape = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;

    h3 {
        color: #6278F7;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #212121;
        padding: 0 16px;
    }
`

const Jogador = ({nome, posicao, imagem, corFundo}) => {
    return(
        <ContainerJogador>
            <DivIMg style={{ backgroundColor: corFundo }} >
                <img src={imagem} alt={nome}/>
            </DivIMg>
            <Rodape>
                <h3>{nome}</h3>
                <p>{posicao}</p>
            </Rodape>
        </ContainerJogador>
    )
}

export default Jogador