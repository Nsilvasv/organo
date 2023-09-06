import { styled } from "styled-components"

const ListaContainer = styled.div`
label{
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
}

 select {
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgb(219, 220, 233);
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 15px;
}
`

const ListaSuspensa = (props) => {
    return(
        <ListaContainer>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor} onChange={e => props.listaAlterada(e.target.value)}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </ListaContainer>
    )   
}

export default ListaSuspensa