const express = require("express");
const DB_CONNECT = require("./config/database");
 const dotenv = require("dotenv");
const users = require("./routes/users");
const {notFound, errorHandler } = require("./middleware/error");
//const { notFound, errorHandler } = require("./middleware/error");
//const path = require("path");
const cors = require('cors');



dotenv.config();
DB_CONNECT();
const app = express();
app.use(cors())

app.use(express.json()); // to accept json data

app.use("/user", users);
app.use(notFound);
app.use(errorHandler)
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});




