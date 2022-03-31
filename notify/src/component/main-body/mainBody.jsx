import "./mainBody.css"
import {AiOutlineSearch} from "react-icons/ai";
import {GiSettingsKnobs} from "react-icons/gi"
import { NoteCard } from "../note-card/noteCard";
const MainBody=()=>{
return <div className="main-body">
  <div className="search-bar"><input type="text" placeholder="Search"/><AiOutlineSearch className="icon"/><GiSettingsKnobs className="icon"/></div>
<NoteCard/>
</div>
}
export {MainBody}