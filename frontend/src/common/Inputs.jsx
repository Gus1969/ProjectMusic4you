import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Wrong, Icono, Label, InputField } from '../iconos.js/RegisterStyles';

// import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';



 const Inputs = ({ estado, setEstado, type, label, placeholder, name, wrong, expReg}) => {
     const handleChange = (e) => {
         //console.log(e.target.value)
        setEstado({...estado, campo: e.target.value})
     }

     const validate = () => {
         if(expReg) {
             if(expReg.test(estado.campo)) {
                 setEstado({...estado, valido: 'true'})
             } else {
                setEstado({...estado, valido: 'false'})
             }
         }
     }
     return (
<div className="form-group p-3">
              <Label htmlFor={name} valido={estado.valido}>{label}</Label>
              <div className='inputGroup'>
              <InputField type={type} name='name' id={name} className="form-control" placeholder={placeholder}
               value={estado.campo}
                onChange={handleChange}
                onKeyUp ={validate} 
                onBlur={validate}
                valido={estado.valido}
                />
              <Icono 
               icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}
                
                />
              </div>
              <Wrong valido={estado.valido}>{wrong}</Wrong>

          </div>

     )
 }
 export default Inputs;
