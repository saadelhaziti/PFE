import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();



const AuthProvider = (props) => {
    useEffect(() => {
        const response = localStorage.getItem('response');
        const res = JSON.parse(response);
        { res && setAuth(res) }
    }, []);

    const [auth, setAuth] = useState({
        //  authenticated: true,
        //  name: "brahim",
        //  prenom:"elaboudi",prof:true

    })
    const logout = () => {
        setAuth({})
        localStorage.removeItem('response')
    }
    return (
        <AuthContext.Provider value={{ auth, setAuth, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}




export { AuthContext, AuthProvider };