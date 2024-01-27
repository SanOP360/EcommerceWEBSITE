import React, { useEffect,useState } from 'react'


const AuthContext=React.createContext({
    token:[],
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken);
    const userIsLoggedIn=!!token;
    
    const loginHandler=(newToken)=>{
        
        setToken(newToken);
        localStorage.setItem('token',newToken);


    }
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }

    useEffect(()=>{
        const logoutTimer=setTimeout(()=>{
            logoutHandler();

        },10*60*1000);

        return()=>{
            clearTimeout(logoutTimer);
        }
    },[token])

    const contextVal = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      logout: logoutHandler,
      login: loginHandler,
    };

    return(
        <AuthContext.Provider value={contextVal}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;