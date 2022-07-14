import React, {SyntheticEvent, useState} from "react";
import './Login.css'
import axios from "axios";
import {Loader} from "../common/Loader/Loader";

export const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [navigation, setNavigation] = useState<boolean>(false);

    // @TODO: Fix error type
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data: any = await axios.post('/user/login', {
                login,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': '*',
                },
                withCredentials: true,
            })

            setMessage(data?.response?.data?.message === undefined ? 'Zalogowano pomyślnie' : data.response.data.message);
            setNavigation(true);
        } finally {
            setLoading(false);

        }
    }

    /*  if(navigation){
              return <Navigate to="/"/>
      }*/
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