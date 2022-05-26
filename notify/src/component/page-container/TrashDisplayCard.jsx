import { useNotesContext } from "../../context/notes-context";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoArrowUndoOutline } from "react-icons/io5";
import parse from "html-react-parser";
import "../note-display/noteDisplay.css";
const TrashDisplayCard = () => {
  const { notesState, notesDispatch, removeFromNotesHandler } =
    useNotesContext();

  return (
    <>
      <div className="note-display-container" style={{ margin: " auto " }}>
        <h3>
          {notesState.notes.filter((item) => item.isTrash === true).length > 0
            ? "TRASH NOTES"
            : "No Notes In Trash"}
        </h3>
        {notesState.notes
          .filter((item) => item.isTrash === true)
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
                  <IoArrowUndoOutline
                    onClick={() =>
                      notesDispatch({ type: "UNTRASH", payload: item.note._id })
                    }
                  />
                  <RiDeleteBin7Fill
                    onClick={() => removeFromNotesHandler(item.note._id)}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export { TrashDisplayCard };
