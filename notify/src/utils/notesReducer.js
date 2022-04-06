import { IoAccessibilityOutline, IoTerminal } from "react-icons/io5";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            note: action.payload,
            isPin: false,
            color: "default",
            isTrash: false,
            isArchive: false,
          },
        ],
        editModal: false,
        toEdit: "",
      };
    case "TRASH":
      const TrashNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isTrash = true;
        return item;
      });
      return { ...state, notes: TrashNotes };
    case "UNTRASH":
      const UnTrashNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isTrash = false;
        return item;
      });
      return { ...state, notes: UnTrashNotes };
    case "PERMENANT_DELETE":
      const AfterDeleteNote = state.notes.filter(
        (item) => item.note.id !== action.payload
      );
      return { ...state, notes: AfterDeleteNote };
    case "PIN":
      const pinNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isPin = true;
        return item;
      });
      return { ...state, notes: pinNotes };
    case "UNPIN":
      const UnpinNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isPin = false;
        return item;
      });
      return { ...state, notes: UnpinNotes };
    case "ARCHIVE":
      const archiveNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isArchive = true;
        return item;
      });
      return { ...state, notes: archiveNotes };
    case "UNARCHIVE":
      const UnarchiveNotes = state.notes.map((item) => {
        if (item.note.id === action.payload) item.isArchive = false;
        return item;
      });
      return { ...state, notes: UnarchiveNotes };
    case "SHOW_EDIT_MODAL":
      return { ...state, editModal: true };
    case "HIDE_EDIT_MODAL":
      return { ...state, editModal: false };
    case "TO_EDIT":
      return { ...state, toEdit: action.payload };

    default:
      return state;
  }
};
export { notesReducer };
