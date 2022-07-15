import React, {SyntheticEvent, useContext, useState} from "react";
import './Login.css'
import axios, {AxiosStatic} from "axios";
import {Loader} from "../common/Loader/Loader";
import {Navigate} from "react-router-dom";
import {AxiosLoginDataError} from "../../types/login";
import {UserContext} from "../../contexts/user.context";

export const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [navigation, setNavigation] = useState<boolean>(false);
    const {logged, setLogged} = useContext(UserContext);
    // @TODO: Fix error type
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data: AxiosStatic = await axios.post('/user/login', {
                login,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': '*',
                },
                withCredentials: true,
            });
            setLogged(true);
            setMessage('Logged in successfully :)');
            setNavigation(true)


        } catch (e: any) {
            if (e.response) {
                setMessage((e as AxiosLoginDataError).response.data.message);
            }


        } finally {
            setLoading(false);

        }
    }

    if (navigation) {
        return <Navigate to="/"/>
    }
    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <img className="logo-image" src="/logo.png" alt="Doggerapp logo"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Your login"
                           onChange={e => setLogin(e.target.value)}/>
                    <label htmlFor="floatingInput">Login</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
            {loading && <Loader/>}
            {message && <div className="message-window">{message}</div>}
        </main>
    )
}