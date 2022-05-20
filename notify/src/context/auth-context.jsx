import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInHandlerService,
  signUpHandlerService,
  signOutHandlerService,
} from "../services/Auth/apiService";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const token = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: token ? true : false,
    tokenVal: token,
  });

  const navigate = useNavigate();

  const logInHandler = async ({ email, password }) => {
    const res = await logInHandlerService(email, password);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      setUser({
        tokenVal: res.data.encodedToken,
        isUserLoggedIn: true,
      });
      navigate("/");
    }
  };

  const signUpHandler = async ({ first, last, email, password }) => {
    const data = await signUpHandlerService(first, last, email, password);
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", data.encodedToken);
    setUser({
      tokenVal: data.encodedToken,
      isUserLoggedIn: true,
    });
    navigate("/");
  };

  const signOutHandler = async () => {
    signOutHandlerService();
    setUser({ isUserLoggedIn: false });
    navigate("/login");
  };

  return (
    <authContext.Provider
      value={{ user, setUser, logInHandler, signUpHandler, signOutHandler }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
