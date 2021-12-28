import { useState} from "react";

const Register_validation = (Validate) => {
  const [values, setValues] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorResult = Validate(values);
    console.log('Hola', errorResult);

    setErrors(errorResult);
  };
  return { handleChange, values, handleSubmit, errors };
};
export default Register_validation;
