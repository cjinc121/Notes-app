import "./header.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineSearch} from "react-icons/ai";
import {GiSettingsKnobs} from "react-icons/gi"
const Header=()=>{
return <div className="navbar">
  <div className="brand-name">
  <GiHamburgerMenu className="hamburger-button" />
   <h3> NOTIFY</h3>
  </div>
  <div className="search-bar"><input type="text" placeholder="Search"/><AiOutlineSearch className="icon"/><GiSettingsKnobs className="icon"/></div>

</div>
}
export {Header}