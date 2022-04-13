import "../note-display/noteDisplay.css";
import { useNotesContext } from "../../context/notes-context";
import { MdDelete, MdOutlineArchive } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { NoteCard } from "../note-card/noteCard";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const LabelDisplayCard = () => {
  const { notesState, notesDispatch } = useNotesContext();
  const { labelName } = useParams();
  return (
    <>
      {notesState.editModal && (
        <div
          className="modal-page"
          onClick={() =>
            notesDispatch({
              type: "HIDE_EDIT_MODAL",
            })
          }
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {<NoteCard editable={true} />}
          </div>
        </div>
      )}

      <div className="note-display-container">
        {notesState.notes
          .filter((item) => item.note.label.includes(labelName))
          .map((item) => {
            return (
              <>
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
                    <GrEdit
                      onClick={() => {
                        notesDispatch({
                          type: "SHOW_EDIT_MODAL",
                        });
                        notesDispatch({
                          type: "TO_EDIT",
                          payload: item.note,
                        });
                      }}
                    />
                    <MdOutlineArchive
                      onClick={() =>
                        notesDispatch({
                          type: "ARCHIVE",
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
              </>
            );
          })}
      </div>
    </>
  );
};
export { LabelDisplayCard };
