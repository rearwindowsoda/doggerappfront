import {createContext} from "react";

export const UserContext = createContext({
    logged: false,
    setLogged: (e: boolean) => {},
})