
const asyncHandler = require("express-async-handler");
const User  = require("../models/userModel");
const createToken = require("../middleware/auth");


const registerUsers = asyncHandler(async (req, res) => {
  const { username, name, email, password, confirm } = req.body;
  

  if (!username || !name || !email || !password || !confirm) {
      res.status(400);
      throw new Error("some error message")
      
  }
   const existingOne = await User.findOne({email});

  if (existingOne) {
    res.status(400)
    throw new Error("User already exists");
  } 
    const user = User.create({
      username,
      name,
      email,
      password,
      confirm,
    });
  
  if (user) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      confirm: user.confirm,
      token: createToken(user.id)
    });
    
  } else  { 
    res.status(400)
    throw new Error("An error occured, please try again later");

  }
});
const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        password: user.password,
        confirm: user.confirm,
        token: createToken(user.id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Username or Password");
    }
  });
// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user.id);
  
//     if (user) {
//         user.username = req.body.username || user.username;
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       user.password = req.body.password || user.password;
//       user.confirm = req.body.confirm || user.confirm
  
//       const updatedUser = await user.save();
  
//       res.json({
//         id: updatedUser.id,
//         username: updatedUser.username,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         password: updatedUser.password,
//         confirm: updatedUser.confirm,
//         token: createToken(updatedUser.id),
//       });
//     } else {
//       res.status(404);
//       throw new Error("User Not Found");
//     }
//   });
  
  module.exports = { authUser, registerUsers };

