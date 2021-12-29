
import {useState} from 'react';
import '../pages/Register.css'
import NavFile from '../common/NavFile';
import { Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  Error, SuccessMsg} from '../iconos.js/RegisterStyles';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Footer from '../common/Footer';
import Inputs from '../common/Inputs';
//import { useSearchParams } from 'react-router-dom';



const Register = () => {
  const [user, setUser] = useState({ campo: "", valido:  null});
  const [name, setName] = useState({ campo: "", valido:  null});
  const [email, setEmail] = useState({ campo: "", valido:  null});
  const [password, setPassword] = useState({ campo: "", valido:  null});
  const [confirm, setConfirm] = useState({ campo: "", valido:  null});
  const [validForm, setValidForm] = useState(null)

  const RegularExpressions = {
    user: /^[a-zA-Z0-9_-]{4,16}/, // numbers, letters, hyphen and underscore
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{3,15}$/, // 3 a 15 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
  }
  const confirmValidation = () => {
    if(password.campo.length > 0) {
      if(password.campo !== confirm.campo) {
       setConfirm((e) => {
         return {...e, valido: 'false'}

       })
      } else {
        setConfirm((e) => {
          return {...e, valido: 'true'}
 
        })
      }
    }
  }
  const handleSubmit = (e)  => {
    e.preventDefault();
    if(user.valido === 'true' && name.valido === 'true' && email.valido === 'true'&& password.valido === 'true'&& confirm.valido === 'true'){

    setValidForm(true);
    setUser({ campo: '', valido: null})
    setName({ campo: '', valido: null})
    setEmail({ campo: '', valido: null})
    setPassword({ campo: '', valido: null})
    setConfirm({ campo: '', valido: null})

    //conexion a database

  } else {
    setValidForm(false);
  }
}

  return (
    
    <div>
      <NavFile/>
      <Container className="wrapper">
      
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
       <form action='' onSubmit={handleSubmit}>
          <h3 className="form-title">User Registration</h3>
          {validForm === true && <SuccessMsg>
            <p><FontAwesomeIcon icon={faExclamationTriangle}/><b> Bienvenido !!</b> </p>
          </SuccessMsg>}

          <Inputs
          estado ={user}
          setEstado = {setUser}
          type="text"
          label="Username"
          placeholder="Your name"
          name="user"
          wrong="Username must contain 3 to 15 characters including numbers, letters, hyphen and underscore"
          expReg={RegularExpressions.user}
          />
          <Inputs
          estado ={name}
          setEstado = {setName}
          type="text"
          label="Full Name"
          placeholder="Your name"
          name="name"
          wrong="Your name must not contain numbers or special characters"
          expReg={RegularExpressions.name}
          />
          <Inputs
          estado ={email}
          setEstado = {setEmail}
          type="email"
          label="Email Adress"
          placeholder="Your email"
          name="email"
          wrong="Your email address must only contain numbers, letters and dots"
          expReg={RegularExpressions.user}
          required
          />
          <Inputs
          estado ={password}
          setEstado = {setPassword}
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          wrong="Your password must contain between 4 to 15 characters"
          expReg={RegularExpressions.password}
          />
          <Inputs
          estado ={confirm}
          setEstado = {setConfirm}
          type="text"
          label="Retype your password"
          placeholder="Password"
          name="confirm"
          wrong="Your passwords must match"
          funcion={confirmValidation}
          
          />
          
          
          
          

          
          {validForm === false &&<Error>
            <p><FontAwesomeIcon icon={faExclamationTriangle}/><b>Error:</b> Please complete the form.</p>
          </Error>}
            <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          {/* <div className=" d-flex justify-content-flex-end">
            Already have an account? Log in <a href="../pages/Login">here</a>
          </div> */}
          
        
      </form>
      </div>
      </div>
      
      </Container>
      <Footer/>
      
    </div>
   
  )
 
}

export default Register