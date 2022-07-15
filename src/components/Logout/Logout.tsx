import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import './Logout.css'
import {Loader} from "../common/Loader/Loader";
import {UserContext} from "../../contexts/user.context";

export const Logout = () => {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const {logged, setLogged} = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                await axios.delete('/user/logout', {withCredentials: true});
                setMessage('Successfully logged out of dogger app. Come back later :)');
                setLogged(false);
            } catch {
                setMessage('Something went terribly wrong. Try again later.')
            } finally {
                setLoading(false);
            }
        })()


    }, [])
    return <div className="container">{loading && <Loader/>}<p className="logout-message">{message}</p></div>
}