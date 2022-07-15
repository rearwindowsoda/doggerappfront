import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './interceptors/axios';
import './App.css';
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";

import {NavBar} from "./components/common/NavBar/NavBar";
import {Home} from "./components/Home/Home";
import {TopTenPosts} from "./components/TopTen/TopTenPosts";
import {UserContext} from "./contexts/user.context";
import {Logout} from './components/Logout/Logout';
import {AddPost} from "./components/AddPost/AddPost";

function App() {
    const [logged, setLogged] = useState(false);

    return (

        <BrowserRouter>
            <UserContext.Provider value={{logged, setLogged}}>
                <NavBar/>
            </UserContext.Provider>
            <Routes>
                <Route path="/"
                       element={<UserContext.Provider value={{logged, setLogged}}><Home/></UserContext.Provider>}/>
                <Route path="/login"
                       element={<UserContext.Provider value={{logged, setLogged}}><Login/></UserContext.Provider>}/>
                <Route path="/register"
                       element={<UserContext.Provider value={{logged, setLogged}}><Register/></UserContext.Provider>}/>
                <Route path="/top10" element={<UserContext.Provider
                    value={{logged, setLogged}}><TopTenPosts/></UserContext.Provider>}/>
                <Route path="/logout"
                       element={<UserContext.Provider value={{logged, setLogged}}><Logout/></UserContext.Provider>}/>
                <Route path="/add-post"
                       element={<UserContext.Provider value={{logged, setLogged}}><AddPost/></UserContext.Provider>}/>

            </Routes>
                        </BrowserRouter>
                        )
                    }


                        export default App;
