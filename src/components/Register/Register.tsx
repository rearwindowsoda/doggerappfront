import React, {SyntheticEvent, useState} from "react";
import axios from 'axios';
import './Register.css'
import {Loader} from "../common/Loader/Loader";

export const Register = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('')

    // @TODO: Fix error type
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data: any = await axios.post('user/register', {
                login,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setMessage(data?.response?.data?.message === undefined ? `Użytkownik ${login} stworzony. Możesz się teraz zalogować.` : data.response.data.message)
        } finally {
            setLoading(false);

        }
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <img className="logo-image" src="/logo.png" alt="Doggerapp logo"/>
                <h1 className="h3 mb-3 fw-normal">Sign up here so you can add your own posts!</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="example@123.br"
                           onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Login"
                           onChange={e => setLogin(e.target.value)}/>
                    <label htmlFor="floatingInput">Login</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
            {loading && <Loader/>}
            {message && <div className="message-window">{message}</div>}
        </main>
    )
}