import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './interceptors/axios';
import './App.css';
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";

import {NavBar} from "./components/common/NavBar/NavBar";
import {Home} from "./components/Home/Home";
function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

            </Routes>
        </BrowserRouter>
    )
}


export default App;
