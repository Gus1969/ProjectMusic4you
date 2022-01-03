const jwt = require("jsonwebtoken");
//const dotenv = require ('dotenv');

 const createToken = (id) => {
   return jwt.sign({id}, process.env.SECRET_TOKEN, {
     expiresIn: "90days"
   });

 };
 module.exports = createToken;