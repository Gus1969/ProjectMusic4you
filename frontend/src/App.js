import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import RoutesFile from './routes/RoutesFile';
if(process.env.ENV !== "production ") { 
require("dotenv").config();
}



function App() {
  return (
    <div className="App">
        <RoutesFile /> 
       
    </div>
  );
}

export default App;
