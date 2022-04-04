import "./noteCard.css"
import {BsFillPinFill} from "react-icons/bs";
import {IoColorPaletteOutline} from "react-icons/io5";
import {MdLabelOutline,MdOutlineArchive,MdDelete} from "react-icons/md";

const NoteCard=()=>{
return <div className="note-card">
 <div className="note-card-title">
   <div className=""><input type="text" placeholder="Title..." className="note-title"/></div>
  <div className="note-pin note-icon "><BsFillPinFill/></div>
  </div>
<div className="note-card-body">
  <textarea placeholder="Add a note.."></textarea>
</div>
<div className="note-card-footer">
  <div className="note-save-button"><button className="button secondary-button">Save</button></div>
 <div className="note-buttons"><IoColorPaletteOutline className="note-icon "/><MdLabelOutline className="note-icon "/>
 {/* <MdOutlineArchive/><MdDelete/> */}
 </div> 
</div>
</div>
}
export {NoteCard}