import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { HiDocumentAdd } from "react-icons/hi";
import { useSidebarConext } from "../../context/sidebar-context";
import { useAuth } from "../../context/auth-context";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const { showSidebar, setShowSidebar, SetTheme } = useSidebarConext();
  const { signOutHandler, user } = useAuth();
  const [themeBox, setThemeBox] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="brand-name">
        <GiHamburgerMenu
          className="hamburger-button"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <HiDocumentAdd
          className="navbar-icon"
          onClick={() => navigate("/home")}
        />
        <h3> NOTIFY</h3>
      </div>

      <div className="right-navbar">
        {user.isUserLoggedIn && (
          <div className="theme">
            <div
              className="theme-container"
              onClick={() => setThemeBox(!themeBox)}
            >
              <RiLightbulbFlashLine className="theme-icon" />
            </div>
            {themeBox && (
              <div className="theme-box">
                <div
                  className="theme-color theme-1"
                  onClick={() => SetTheme("theme-1")}
                ></div>
                <div
                  className="theme-color theme-2"
                  onClick={() => SetTheme("theme-2")}
                ></div>
                <div
                  className="theme-color theme-3"
                  onClick={() => SetTheme("theme-3")}
                ></div>
                <div
                  className="theme-color theme-4"
                  onClick={() => SetTheme("theme-4")}
                ></div>
              </div>
            )}
          </div>
        )}
        {user.isUserLoggedIn ? (
          <AiOutlineLogout className="icon" onClick={() => signOutHandler()} />
        ) : (
          <AiOutlineLogin className="icon" onClick={() => navigate("/login")} />
        )}
      </div>
    </div>
  );
};
export { Header };
