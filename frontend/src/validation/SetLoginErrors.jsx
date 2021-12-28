function SetLoginErrors(values) {
  let errores = [];
  //let success = [];

  if (!values.email) {
    errores.email = "Please enter your email";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {

    errores.email = "Invalid email address";
  } 

  if (values.email === "prueba@admin.com" && values.password === 'testingpwd2021') {
      alert ('Bienvenido!');
  } else if (values.email === "prueba@admin.com" && values.password !== 'testingpwd2021') {
      errores.password =" Wrong password";
  } 

  if (!values.password) {
    errores.password = "Enter your password please";
  } 

  return errores;
}
export default SetLoginErrors;
