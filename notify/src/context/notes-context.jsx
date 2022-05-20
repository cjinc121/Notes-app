import { createContext, useContext, useReducer } from "react";
import {
  addToArchiveService,
  deleteFromArchivesService,
  getArchivedNotesService,
  restoreFromArchivesService,
} from "../services/archive/archiveservice";
import {
  addNotesService,
  getNotesService,
  removeFromNotesService,
  updateNoteService,
} from "../services/notes/noteService";
import { notesReducer } from "../utils/notesReducer";
import { useAuth } from "./auth-context";
const NotesContext = createContext(null);
const useNotesContext = () => useContext(NotesContext);
const NotesContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    editModal: false,
    toEdit: "",
    uniqueLabels: [],
  });
  const addNotesHandler = async (note) => {
    const { data, status } = await addNotesService(note, user);
    if (status === 201) {
      notesDispatch({
        type: "ADD_NEW_NOTE",
        payload: { note: data.notes[data.notes.length - 1] },
      });
    }
  };
  const updateNoteHandler = async (note) => {
    const res = await updateNoteService(user, note, note._id);
    console.log(res);
  };
  const removeFromNotesHandler = async (id) => {
    const { status } = await removeFromNotesService(id, user);
    if (status === 200) {
      notesDispatch({
        type: "PERMENANT_DELETE",
        payload: id,
      });
    }
  };
  const getNotesHandler = async () => {
    const { data, status } = await getNotesService(user);
    if (status === 200) {
      notesDispatch({
        type: "UPDATE_NOTES",
        payload: data.notes,
      });
    }
  };
  const addToArchiveHandler = async (note, id) => {
    const { data, status } = await addToArchiveService(note, id, user);
    console.log(data);
    if (status === 201) {
      notesDispatch({
        type: "ARCHIVE",
        payload: id,
      });
    }
  };
  const restoreFromArchiveshandler = async (note, id) => {
    const res = await restoreFromArchivesService(note, id, user);
    console.log(res);
    if (res.status === 200) {
      notesDispatch({
        type: "UNARCHIVE",
        payload: id,
      });
    }
  };
  const deleteFromArchivesHandler = async (id) => {
    const res = await deleteFromArchivesService(id, user);
    console.log(res);

    if (res.status === 200) {
      notesDispatch({ type: "TRASH", payload: id });
    }
  };
  const getArchivedNotesHandler = async () => {
    const res = await getArchivedNotesService(user);
    console.log(res);
  };
  return (
    <NotesContext.Provider
      value={{
        notesState,
        notesDispatch,
        addNotesHandler,
        updateNoteHandler,
        removeFromNotesHandler,
        getNotesHandler,
        addToArchiveHandler,
        restoreFromArchiveshandler,
        deleteFromArchivesHandler,
        getArchivedNotesHandler,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
export { useNotesContext, NotesContextProvider };
