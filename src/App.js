import React from 'react'
import Gallery from './Components/Gallery'
import Login from './Components/Login';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path = "/gallery" element = { <Gallery /> }> </Route>
        <Route index element = { <Login /> }></Route>


      </Routes>

      
      
    </BrowserRouter>
  )
}

export default App
