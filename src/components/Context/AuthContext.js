import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      
      logoutHandler();
    }

    const logoutTimer = setTimeout(() => {
      logoutHandler();
    }, 10 * 60 * 1000);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [token]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
