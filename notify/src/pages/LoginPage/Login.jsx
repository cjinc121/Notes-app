import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { Header } from "../../component/header/header";
const Login = () => {
  const { logInHandler } = useAuth();
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  return (
    <div className="auth-page">
      <Header />
      <div className="authentication-card-container">
        <h3>Log In</h3>
        <input
          type="email"
          className="input"
          name="username"
          placeholder="ENTER YOUR EMAIL"
          onChange={(e) => setLogUser({ ...logUser, email: e.target.value })}
        />
        <input
          type="password "
          className="input"
          name="password"
          placeholder="ENTER PASSWORD"
          onChange={(e) => setLogUser({ ...logUser, password: e.target.value })}
        />

        <div className="button-row-4">
          <button
            className="button contained-button "
            onClick={() => logInHandler(logUser)}
          >
            Log In
          </button>
          <button
            className="button contained-button"
            onClick={() => logInHandler(guestUser)}
          >
            Guest Login
          </button>
        </div>
        <Link to="/signup">
          <u>Create New Account</u>
        </Link>
      </div>
    </div>
  );
};
export { Login };
