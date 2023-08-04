import React from "react";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import SwiggatoApp from "./project/home";
import Index1 from "./project/index1";
import Cart1 from "./project/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />}></Route>
        <Route path='/project/index1' Component={Index1} />
        <Route path='/project/home' Component={SwiggatoApp} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/project/cart' Component={Cart1} />
      </Routes>
    </BrowserRouter>
  )
}

export default App