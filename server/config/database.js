


//Connection file to mongo db
const mongoose = require("mongoose");

const DB_CONNECT = () => {
  try {
    mongoose.connect("mongodb+srv://gustavo:gustavo2021@terceraentrega.lb0hj.mongodb.net/db_table?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
    process.exit()
    
  }
};

module.exports = DB_CONNECT;