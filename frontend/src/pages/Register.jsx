
import {useState} from 'react';
import '../pages/Register.css'
import NavFile from '../common/NavFile';
import { Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Wrong, Error, SuccessMsg} from '../iconos.js/RegisterStyles';
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

  const RegularExpressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}/, // numbers and letters and underscore
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{3,15}$/, // 3 a 15 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
  }
 

  return (
    
    <div>
      <NavFile/>
      <Container className="wrapper">
      
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
       <form action=''>
          <h3 className="form-title">User Registration</h3>
          {/* {<SuccessMsg>
            <p><FontAwesomeIcon icon={faExclamationTriangle}/><b> Bienvenido !!</b> </p>
          </SuccessMsg>} */}

          <Inputs
          estado ={user}
          setEstado = {setUser}
          type="text"
          label="Username"
          placeholder="Your name"
          name="username"
          wrong="Username must contain from 3 to 15 characters including numbers, letters and underscore"
          expReg={RegularExpressions.user}

          />
          
          
          
          

          
          { false &&<Error>
            <p><FontAwesomeIcon icon={faExclamationTriangle}/><b>Error:</b> Please complete the form.</p>
          </Error>}
            <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          <div className=" d-flex justify-content-flex-end">
            Already have an account? Log in <a href="../pages/Login">here</a>
          </div>
          
        
      </form>
      </div>
      </div>
      
      </Container>
      <Footer/>
      
    </div>
   
  )
 
}

export default Register