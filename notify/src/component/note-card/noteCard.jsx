import "./noteCard.css";
import { useEffect, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useNotesContext } from "../../context/notes-context";
import { v4 as uuid } from "uuid";
const NoteCard = ({ editable }) => {
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [noteContent, setNoteContent] = useState({
    id: uuid(),
    title: "",
    body: "",
    date: currentDate,
    label: "",
  });
  const { notesState, notesDispatch } = useNotesContext();
  useEffect(() => {
    if (editable) {
      setNoteContent({
        id: notesState.toEdit.id,
        title: notesState.toEdit.title,
        body: notesState.toEdit.body,
        date: notesState.toEdit.date,
        label: notesState.toEdit.label,
      });
    }
  }, []);
  return (
    <div className="note-card">
      <div className="note-card-title">
        <input
          type="text"
          placeholder="Title..."
          className="note-title"
          onChange={(e) =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              title: e.target.value,
            }))
          }
          value={noteContent.title}
        />
      </div>
      <div className="note-card-body">
        <textarea
          onChange={(e) =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              body: e.target.value,
            }))
          }
          contentEditable="true"
          placeholder="Add a note.."
          value={noteContent.body}
        ></textarea>
      </div>
      <div className="note-card-footer">
        <div className="note-card-label">
          <p>{noteContent.date}</p>
          <input
            type="text"
            placeholder="Add a Label..."
            className="note-label"
            onChange={(e) =>
              setNoteContent((noteContent) => ({
                ...noteContent,
                label: e.target.value,
              }))
            }
            value={noteContent.label}
          />
        </div>
        <div className="note-buttons">
          <IoColorPaletteOutline className="note-icon " />
          <MdLabelOutline className="note-icon " />
          <AiOutlinePlus
            className="note-icon"
            onClick={() => {
              if (editable) {
                notesDispatch({
                  type: "PERMENANT_DELETE",
                  payload: notesState.toEdit.id,
                });
              }
              notesDispatch({ type: "ADD_NEW_NOTE", payload: noteContent });
              setNoteContent({ id: uuid(), title: "", body: "", label: "" });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export { NoteCard };
