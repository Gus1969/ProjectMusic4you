
import React, { useState } from 'react';
import '../pages/Register.css'
import NavFile from '../common/NavFile';
import { Container} from 'react-bootstrap';
import Footer from '../common/Footer';
//const axios = require ('axios')


//import Register_validation from '../validation/Register_validation';
//import Validate from '../validation/Validation';

const Register = () => {
 
 const [name, setName] = useState('');
 const [last, setLast] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirm, setConfirm] = useState('');

 async function handleSubmit(e) {
  e.preventDefault()
   
  const response = await fetch('http://localhost:4000/register' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      last,
      email,
      password,
      confirm

    })
  })
  const data = response.json
  console.log(data)
}

  return (
    <div>
      <NavFile/>
      <Container className="wrapper">
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
       <form onSubmit={handleSubmit}>
          <h3 className="form-title">User Registration</h3>

          <div className="form-group p-3">
              <label>First name</label>
              <input type="text" name='name' className="form-control" placeholder="First name" value={name} onChange={(e) => setName(e.target.name)}/>
              
          </div>

          <div className="form-group p-3">
              <label>Last name</label>
              <input type="text" name="last" className="form-control" placeholder="Last name" value={last} onChange={(e) => setLast(e.target.last)} />
              
          </div>

          <div className="form-group p-3">
              <label>Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.email)} />
              
          </div>

          <div className="form-group p-3">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.password)} />
              
          </div>
          <div className="form-group p-3">
              <label>Confirm Password</label>
              <input type="password" name="confirm" className="form-control" placeholder="Enter password" value={confirm} onChange={(e) => setConfirm(e.target.confirm)} />
              
          </div>
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


