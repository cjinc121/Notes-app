import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../utils/notesReducer";
const NotesContext = createContext(null);
const useNotesContext = () => useContext(NotesContext);
const NotesContextProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    editModal: false,
    toEdit: "",
    uniqueLabels: [],
  });

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
export { useNotesContext, NotesContextProvider };
