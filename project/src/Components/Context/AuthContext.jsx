import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: true,
  
  });

  function handleLogin() {
    setState({
      ...state,
      isAuth: true,
    
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      
    });
  }

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
