import { styled } from "styled-components"
import Jogador from "../Jogador"

const TimeContainer = styled.section`
    text-align: center;
    padding: 32px;
`
const Cabecalho = styled.h2`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`
const JogadorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`
const Time = (props) => {

    const css = {backgroundColor:props.corSecundaria} // uma forma de estilo com props

    return(
        (props.jogadores.length > 0) ? <TimeContainer style={css}>
            <Cabecalho style={ {borderColor:props.corPrimaria} } >{props.timeCabecalho}</Cabecalho>
            <JogadorContainer> 
                {props.jogadores.map(jogador => <Jogador key={jogador.nome} 
                    corFundo={props.corPrimaria} 
                    nome={jogador.nome} 
                    posicao={jogador.posicao} 
                    imagem={jogador.imagem}
                /> )}
             </JogadorContainer>
       </TimeContainer>
       : ''
    )
}

export default Time