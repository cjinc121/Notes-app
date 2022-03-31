import "./noteCard.css"
import {BsFillPinFill} from "react-icons/bs";
import {IoColorPaletteOutline} from "react-icons/io5";
import {MdLabelOutline,MdOutlineArchive,MdDelete} from "react-icons/md";

const NoteCard=()=>{
return <div className="note-card">
 <div className="note-card-title">
  <div className="note-title"><h3>Title of the note</h3></div>
  <div className="note-pin "><BsFillPinFill/></div>
  </div>
<div className="note-card-body">
<div contenteditable="true" aria-multiline="true" role="textbox" className="text"aria-placeholder="note" aria-label="take a note.." dir="ltr" tabindex="0" spellcheck="true"></div>
</div>
<div className="note-card-footer">
  <div className="note-date">Created on 26/1/2020</div>
 <div className="note-buttons"><IoColorPaletteOutline/><MdLabelOutline/><MdOutlineArchive/><MdDelete/></div> 
</div>
</div>
}
export {NoteCard}