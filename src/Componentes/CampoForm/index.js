import { styled } from "styled-components"

const CampoContainer = styled.div`
    margin: 24px 0;
`
const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
`
const Input = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgb(219, 220, 233);
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 15px;
    box-sizing: border-box;
`
const CampoForm = (props) =>{

    const handleChange = (e) =>{
        props.inputAlterado(e.target.value)
    }
    return(
        <CampoContainer>
            <Label>{props.label}</Label>
            <Input required={props.required} value={props.valor} onChange={handleChange} placeholder={props.placeholder}/>
        </CampoContainer>
    )
}

export default CampoForm