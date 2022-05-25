import "./leftSidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";

import { MdLabelOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSidebarConext } from "../../context/sidebar-context";
import { useNotesContext } from "../../context/notes-context";
const LeftSidebar = () => {
  const { showSidebar, theme } = useSidebarConext();
  const { notesState } = useNotesContext();
  const navigate = useNavigate();
  return (
    <>
      {showSidebar && (
        <div className={`sidebar-container ${theme}`}>
          <div className="sidebar-heading" onClick={() => navigate("/home")}>
            <AiFillHome className="sidebar-icon" />
            Home
          </div>
          {notesState.uniqueLabels.map((item) => {
            return (
              <div
                className="sidebar-heading"
                onClick={() => navigate(`/labels/${item}`)}
              >
                <MdLabelOutline className="sidebar-icon" /> {item}
              </div>
            );
          })}
          <div className="sidebar-heading" onClick={() => navigate("/archive")}>
            <BiArchiveIn className="sidebar-icon" />
            Archive
          </div>
          <div className="sidebar-heading" onClick={() => navigate("/trash")}>
            <BsTrashFill className="sidebar-icon" />
            Trash
          </div>
        </div>
      )}
    </>
  );
};
export { LeftSidebar };
