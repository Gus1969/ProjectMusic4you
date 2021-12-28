import React  from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "./RoutePath";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Songs from "../pages/Songs";
import Login from "../pages/Login";

const RoutesFile = () => {
  return ( 
  <>
  
    <Routes>
    <Route path={RoutePath.content} element={<Home />} />
      <Route path={RoutePath.Home} element={<Home />} />
      <Route path={RoutePath.Songs} element={<Songs />} />
      <Route path={RoutePath.Login} element={<Login />} />
      <Route path={RoutePath.Register} element={<Register />} />
    </Routes>
    
  </>
  )
};
export default RoutesFile;
