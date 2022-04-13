import { useNotesContext } from "../../context/notes-context";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoArrowUndoOutline } from "react-icons/io5";
import parse from "html-react-parser";
import "../note-display/noteDisplay.css";
const TrashDisplayCard = () => {
  const { notesState, notesDispatch } = useNotesContext();

  return (
    <>
      <div className="note-display-container">
        <h3>
          {notesState.notes.filter((item) => item.isTrash === true).length > 0
            ? "TRASH NOTES"
            : "EMPTY"}
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
                      notesDispatch({ type: "UNTRASH", payload: item.note.id })
                    }
                  />
                  <RiDeleteBin7Fill
                    onClick={() =>
                      notesDispatch({
                        type: "PERMENANT_DELETE",
                        payload: item.note.id,
                      })
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
export { TrashDisplayCard };
