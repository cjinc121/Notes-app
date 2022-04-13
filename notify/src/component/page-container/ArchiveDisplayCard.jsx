import { useNotesContext } from "../../context/notes-context";
import { MdOutlineUnarchive, MdDelete } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import "../note-display/noteDisplay.css";
import parse from "html-react-parser";

const ArchiveDisplayCard = () => {
  const { notesState, notesDispatch } = useNotesContext();

  return (
    <>
      <div className="note-display-container">
        <h3>
          {notesState.notes.filter(
            (item) => item.isArchive === true && item.isTrash === false
          ).length > 0
            ? "ARCHIVED NOTES"
            : "EMPTY"}
        </h3>
        {notesState.notes
          .filter((item) => item.isArchive === true && item.isTrash === false)
          .map((item) => {
            return (
              <div className={`note-display-card ${item.note.color}`}>
                <div className="note-display-title">
                  <p>{item.note.title}</p>
                </div>
                <div className="note-display-body">
                  <p>
                    {" "}
                    {item.note.body.length > 0 || item.note.title.length > 0
                      ? parse(item.note.body)
                      : "EMPTY NOTE"}
                  </p>
                </div>
                <div className="note-display-footer">
                  <MdOutlineUnarchive
                    onClick={() =>
                      notesDispatch({
                        type: "UNARCHIVE",
                        payload: item.note.id,
                      })
                    }
                  />
                  <MdDelete
                    onClick={() =>
                      notesDispatch({ type: "TRASH", payload: item.note.id })
                    }
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export { ArchiveDisplayCard };
