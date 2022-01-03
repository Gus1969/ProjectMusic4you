const express = require("express");
const DB_CONNECT = require("./config/database");
 const dotenv = require("dotenv");
const users = require("./routes/users");
const {notFound, errorHandler } = require("./middleware/error");
//const { notFound, errorHandler } = require("./middleware/error");
//const path = require("path");

dotenv.config();
DB_CONNECT();
const app = express();

app.use(express.json()); // to accept json data

app.use("/user", users);
app.use(notFound);
app.use(errorHandler)
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});


// --------------------------deployment------------------------------

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/pages")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// --------------------------deployment------------------------------

// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

