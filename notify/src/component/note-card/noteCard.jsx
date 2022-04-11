import "./noteCard.css";
import { useEffect, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useNotesContext } from "../../context/notes-context";
import { v4 as uuid } from "uuid";
const NoteCard = ({ editable }) => {
  const [showColors, setShowColors] = useState(false);
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [noteContent, setNoteContent] = useState({
    id: uuid(),
    title: "",
    body: "",
    date: currentDate,
    color: "white",
  });
  const { notesState, notesDispatch } = useNotesContext();
  useEffect(() => {
    if (editable) {
      setNoteContent({
        id: notesState.toEdit.id,
        title: notesState.toEdit.title,
        body: notesState.toEdit.body,
        date: notesState.toEdit.date,
        color: notesState.toEdit.color,
      });
    }
  }, []);
  return (
    <div className={`note-card ${noteContent.color}`}>
      <div className="note-card-title">
        <input
          type="text"
          placeholder="Title..."
          className={`note-title ${noteContent.color}`}
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
          className={`${noteContent.color}`}
          onChange={(e) =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              body: e.target.value,
            }))
          }
          placeholder="Add a note.."
          value={noteContent.body}
        ></textarea>
      </div>
      <div className="note-card-footer">
        {
          <div className="note-card-label">
            <p>{noteContent.date}</p>
          </div>
        }
        <div className="note-buttons">
          <IoColorPaletteOutline
            className="note-icon "
            onClick={() => {
              setShowColors(!showColors);
            }}
          />
          {/* colorPallete */}
          {showColors && (
            <div className="color-pallete">
              <div
                className="color white"
                onClick={() =>
                  setNoteContent((noteContent) => ({
                    ...noteContent,
                    color: "white",
                  }))
                }
              ></div>
              <div
                className="color green"
                onClick={() =>
                  setNoteContent((noteContent) => ({
                    ...noteContent,
                    color: "green",
                  }))
                }
              ></div>
              <div
                className="color yellow"
                onClick={() =>
                  setNoteContent((noteContent) => ({
                    ...noteContent,
                    color: "yellow",
                  }))
                }
              ></div>
              <div
                className="color blue"
                onClick={() =>
                  setNoteContent((noteContent) => ({
                    ...noteContent,
                    color: "blue",
                  }))
                }
              ></div>
              <div
                className="color red"
                onClick={() =>
                  setNoteContent((noteContent) => ({
                    ...noteContent,
                    color: "red",
                  }))
                }
              ></div>
            </div>
          )}
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
              notesDispatch({
                type: "ADD_NEW_NOTE",
                payload: { note: noteContent },
              });
              setNoteContent({ id: uuid(), title: "", body: "" });
              setShowColors(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export { NoteCard };
