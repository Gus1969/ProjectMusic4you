
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
line-height: 65px;
border: 3px solid transparent;
height: 45px;
transition: .4s ease all;
${props => props.valido === 'true' && css `
border: 3px solid transparent;

`}
${props => props.valido === 'false' && css `
border: 3px solid red !important;


`}
@media (max-width:778px) {  
    padding: 0 30px 0 10px;
line-height: 25px;
border: 1px solid transparent;
height: 35px;
}

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
@media (max-width:778px) {  
right: 10px;
font-size: 10px;
bottom: 10px;
}

`

const Wrong = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: #bb2929;
    display: none;

    ${props => props.valido === 'true' && css `
        display: none;
`}
    ${props => props.valido === 'false' && css `
        display: block;
`}
@media (max-width:778px) {
    font-size: 10px !important;
}

    
`

const SuccessMsg = styled.p `
font-size: 14px;
color:green;
text-align:center;
color: white;
background: green;
@media (max-width:778px) {
    font-size: 10px !important;
}



`
const Error = styled.p `
font-size: 18px;
text-align:center;
color: white;
background: #F66060;
word-spacing: 5px;
@media (max-width:778px) {
    font-size: 10px !important;
}




`
export {InputField, Icono, Label, Wrong, Error, SuccessMsg};