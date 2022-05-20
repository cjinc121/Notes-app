import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useSidebarConext } from "../../context/sidebar-context";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
const Header = () => {
  const { showSidebar, setShowSidebar } = useSidebarConext();
  const { signOutHandler, user } = useAuth();
  return (
    <div className="navbar">
      <div className="brand-name">
        <GiHamburgerMenu
          className="hamburger-button"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <h3> NOTIFY</h3>
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search" />
        <AiOutlineSearch className="icon" />
      </div> */}
      <div className="right-navbar">
        {user.isUserLoggedIn ? (
          <AiOutlineLogout className="icon" onClick={() => signOutHandler()} />
        ) : (
          <Link to="/login">
            <AiOutlineLogin className="icon" />
          </Link>
        )}
      </div>
    </div>
  );
};
export { Header };
