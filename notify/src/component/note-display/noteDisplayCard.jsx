import "./noteDisplay.css";
import { useNotesContext } from "../../context/notes-context";
import {MdDelete,MdOutlineArchive } from "react-icons/md";
import {BsFillPinFill} from "react-icons/bs";
import {IoColorPaletteOutline} from "react-icons/io5";
import { useEffect, useState } from "react";

const NoteDisplayCard=()=>{
  const {notes,setNotes}=useNotesContext();

  return <>

    <div className="note-display-container">
    <h3> Notes:</h3>
{
notes.map((note)=>{
  return <div className="note-display-card" >
  <div className="note-display-title"> 
<p>{note.title}</p><BsFillPinFill /></div>
<div className="note-display-body"><p> {note.body}</p></div>
<div className="note-display-footer"> 
<IoColorPaletteOutline/>  
<MdOutlineArchive /> 
<MdDelete onClick={()=>{setNotes((notes)=>notes.filter((filterNote)=>filterNote.id!=note.id))}}/> 
</div>
</div>
 

})}

  </div> 

 </>
}
export {NoteDisplayCard};
