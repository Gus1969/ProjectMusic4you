
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled, {css} from 'styled-components';


const Label = styled.label`
display: block;
font-size: 16px;
font-weight: 700;
padding: 10px;
min-height: 30px;
cursor: pointer;
${props => props.valido === 'false' && css `
color: red;


`}

`
const InputField = styled.input`
width: 100%;
padding: 0 40px 0 10px;

line-height: 45px;
border: 3px solid transparent;
height: 45px;
transition: .4s ease all;
${props => props.valido === 'true' && css `
border: 3px solid transparent;

`}
${props => props.valido === 'false' && css `
border: 3px solid red !important;


`}
`;

const Icono = styled(FontAwesomeIcon) `
position: absolute;
right: 10px;
font-size: 16px;
bottom: 15px;
z-index: 100;
opacity: 0;
${props => props.valido === 'false' && css `
    opacity: 1;
    color: red;
`}
${props => props.valido === 'true' && css `
    opacity: 1;
    color: green;
`}

`

const Wrong = styled.p`
    font-size: 9px;
    margin-bottom: 0;
    color: #bb2929;
    display: none;

    ${props => props.valido === 'true' && css `
        display: none;
`}
    ${props => props.valido === 'false' && css `
        display: block;
`}
    
`

const SuccessMsg = styled.p `
font-size: 14px;
color:{Colores.success};
text-align:center;
margin: 10px 0 10px 0;
color: green;
padding: 5px 0 5px 0;
background: green;
color: white;
display: none;

`
const Error = styled.p `
font-size: 18px;
text-align:center;
margin: 10px 0 10px 0;
color: white;
background: #F66060;
padding: 10px;
word-spacing: 5px;



`
export {InputField, Icono, Label, Wrong, Error, SuccessMsg};