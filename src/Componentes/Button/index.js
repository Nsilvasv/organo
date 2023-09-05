import { styled } from "styled-components"

const Btn = styled.button`
    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 15px;
    border: none; 
    cursor: pointer;
    color: #FFF;
    margin: 16px 0;
`
const Button = (props) => {
    return(
            <Btn>{props.children}</Btn>
    )
}

export default Button