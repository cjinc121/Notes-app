import "./leftSidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSidebarConext } from "../../context/sidebar-context";
const LeftSidebar = () => {
  const { showSidebar } = useSidebarConext();
  return (
    <>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-heading">
            <Link to="/">
              <AiFillHome className="sidebar-icon" />
              Home
            </Link>
          </div>

          <div className="sidebar-heading">
            <Link to="/archive">
              <BiArchiveIn className="sidebar-icon" />
              Archive
            </Link>
          </div>
          <div className="sidebar-heading">
            <Link to="/trash">
              <BsTrashFill className="sidebar-icon" />
              Trash
            </Link>
          </div>
          <div className="sidebar-heading">
            <CgProfile className="sidebar-icon" />
            Profile
          </div>
        </div>
      )}
    </>
  );
};
export { LeftSidebar };
