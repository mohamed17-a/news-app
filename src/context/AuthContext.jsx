import { createContext, useState } from "react";

const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [signedUser, setSigned] = useState({});
  const [isAuthenticated, setisAuthenticated] = useState(false);
  function handlelogin(user) {
    setSigned(user);
    localStorage.setItem("signedUser", JSON.stringify(user));
    setisAuthenticated(true);
  }
  function handlelogOut() {
    setSigned({});
    localStorage.clear();
    setisAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{
        signedUser,
        handlelogin,
        handlelogOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
