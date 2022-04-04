import "./leftSidebar.css";
import {AiFillHome} from "react-icons/ai";
import {MdLabelImportant} from 'react-icons/md';
import {BiArchiveIn} from "react-icons/bi";
import {BsTrashFill} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
const LeftSidebar=()=>{
return <div className="sidebar">
   <div className="sidebar-heading"><AiFillHome className="sidebar-icon"/>Home</div>
   <div className="sidebar-heading"><MdLabelImportant className="sidebar-icon"/>Labels</div>
   <div className="sidebar-heading"><BiArchiveIn className="sidebar-icon"/>Archive</div>
   <div className="sidebar-heading"><BsTrashFill className="sidebar-icon"/>Trash</div>
   <div className="sidebar-heading"><CgProfile className="sidebar-icon"/>Profile</div>
<button className="button contained-button">Create New Note</button>



</div>
}
export {LeftSidebar}