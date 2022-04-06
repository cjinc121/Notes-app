import "./noteCard.css"
import { useState } from "react";
import {IoColorPaletteOutline} from "react-icons/io5";
import {MdLabelOutline,} from "react-icons/md";
import {AiOutlinePlus} from "react-icons/ai";
import { useNotesContext } from "../../context/notes-context";
import { v4 as uuid } from 'uuid';
const NoteCard=()=>{
  const [noteContent,setNoteContent]=useState({id:uuid(),title:"",body:"",isPin:false,color:"default",label:""});
  const {setNotes} =useNotesContext();
return <div className="note-card">
 <div className="note-card-title">
   <input type="text" placeholder="Title..." className="note-title" onChange={(e)=>setNoteContent((noteContent)=>({...noteContent,title:e.target.value.length>0?e.target.value:"EMPTY NOTE"}))} value={noteContent.title}/>
  </div>
<div className="note-card-body" >
 <textarea onChange={(e)=>setNoteContent((noteContent)=>({...noteContent,body:e.target.value}))} contentEditable="true" placeholder="Add a note.." value={noteContent.body}></textarea> 
</div>
<div className="note-card-footer">
  <div className="note-card-label"><input type="text" placeholder="Add a Label..." className="note-label" onChange={(e)=>setNoteContent((noteContent)=>({...noteContent,label:e.target.value}))} value={noteContent.label}/></div>
 <div className="note-buttons">
   <IoColorPaletteOutline className="note-icon "/>
   <MdLabelOutline className="note-icon "/>
   <AiOutlinePlus className="note-icon" onClick={()=>{
     setNotes((notes)=>([...notes,noteContent]));
     setNoteContent({id:uuid(),title:"",body:"",isPin:false,color:"default",label:""});
     }}/>
 </div> 
</div>
</div>
}
export {NoteCard}