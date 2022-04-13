import "./leftSidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdLabelOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarConext } from "../../context/sidebar-context";
import { useNotesContext } from "../../context/notes-context";
const LeftSidebar = () => {
  const { showSidebar, setShowSidebar } = useSidebarConext();
  const { notesState } = useNotesContext();
  return (
    <>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-heading">
            <Link onClick={() => setShowSidebar(false)} to="/">
              <AiFillHome className="sidebar-icon" />
              Home
            </Link>
          </div>
          {notesState.uniqueLabels.map((item) => {
            return (
              <div className="sidebar-heading">
                <Link
                  onClick={() => setShowSidebar(false)}
                  to={`/labels/${item}`}
                >
                  <MdLabelOutline className="sidebar-icon" /> {item}
                </Link>
              </div>
            );
          })}
          <div className="sidebar-heading">
            <Link onClick={() => setShowSidebar(false)} to="/archive">
              <BiArchiveIn className="sidebar-icon" />
              Archive
            </Link>
          </div>
          <div className="sidebar-heading">
            <Link onClick={() => setShowSidebar(false)} to="/trash">
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
