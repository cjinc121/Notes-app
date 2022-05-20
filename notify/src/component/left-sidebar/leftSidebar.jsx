import "./leftSidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";

import { MdLabelOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarConext } from "../../context/sidebar-context";
import { useNotesContext } from "../../context/notes-context";
const LeftSidebar = () => {
  const { showSidebar } = useSidebarConext();
  const { notesState } = useNotesContext();
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
          {notesState.uniqueLabels.map((item) => {
            return (
              <div className="sidebar-heading">
                <Link to={`/labels/${item}`}>
                  <MdLabelOutline className="sidebar-icon" /> {item}
                </Link>
              </div>
            );
          })}
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
        </div>
      )}
    </>
  );
};
export { LeftSidebar };
