import { useState} from "react";

const LoginValidation = (value) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState('');
  //const [success, setSuccess] = useState('');

  const changer = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    const errorResultado = value(values);
    //const resultadoOk = value(values)
    console.log('Hola', errorResultado);
    //console.log("success", resultadoOk)

    setErrores(errorResultado);
    //setSuccess(resultadoOk)
  };
  return { changer, values, Submit, errores };
};
export default LoginValidation;
