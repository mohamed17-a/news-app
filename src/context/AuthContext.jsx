import { createContext, useState } from "react";

const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [signedUser, setSigned] = useState({});
  function handlelogin(user) {
    setSigned(user);
    localStorage.setItem("signedUser", JSON.stringify(user));
  }
  function handlelogOut() {
    setSigned({});
    localStorage.clear();
  }
  return (
    <AuthContext.Provider
      value={{ signedUser, handlelogin, handlelogOut, setSigned }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
