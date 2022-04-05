import { createContext, useContext, useState } from "react";

const NotesContext=createContext(null);
const useNotesContext=()=>useContext(NotesContext);
const NotesContextProvider=({children})=>{
  const [notes,setNotes]=useState([]);

return <NotesContext.Provider value={{notes,setNotes}}>{children}</NotesContext.Provider>
}
export {useNotesContext,NotesContextProvider};