import landingImage from "../../notes-landing-img.svg";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h2 className="landing-header">NOTIFY</h2>
        <img src={landingImage} />
        <div className="landing-text">
          <h2>Your Personalised Notes App</h2>
          <p>Stay Organised!! Stay Focused!!</p>
          <button
            className="button contained-button"
            onClick={() => navigate("/login")}
          >
            LogIn
          </button>
          <button
            className="button contained-button"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};
