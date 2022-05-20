import "./noteDisplay.css";
import { useNotesContext } from "../../context/notes-context";
import { MdDelete, MdOutlineArchive } from "react-icons/md";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { NoteCard } from "../note-card/noteCard";
import parse from "html-react-parser";
import { useFilterContext } from "../../context/filter-context";
import { useEffect } from "react";

const NoteDisplayCard = () => {
  const { notesState, notesDispatch, getNotesHandler, addToArchiveHandler } =
    useNotesContext();
  const { filterData } = useFilterContext();

  useEffect(() => {
    getNotesHandler();
  }, []);

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
      {notesState.notes.filter(
        (item) =>
          item.isTrash === false &&
          item.isPin === true &&
          item.isArchive === false
      ).length > 0 && <h3> Pinned:</h3>}
      <div className="note-display-container">
        {notesState.notes
          .filter(
            (item) =>
              item.isTrash === false &&
              item.isPin === true &&
              item.isArchive === false
          )
          .map((item) => {
            return (
              <div className={`note-display-card ${item.note.color}`}>
                <div className="note-display-title">
                  <p>{item.note.title}</p>
                  <BsFillPinFill
                    onClick={() =>
                      notesDispatch({ type: "UNPIN", payload: item.note.id })
                    }
                  />
                </div>
                <div className="note-display-body">
                  <p>
                    {" "}
                    {item.note.body.length > 0 || item.note.title.length > 0
                      ? parse(item.note.body)
                      : "EMPTY NOTE"}
                  </p>
                </div>
                <div className="note-display-labels">
                  {item.note.label.map((name) => {
                    return <div className="chip">{name}</div>;
                  })}
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
                    onClick={() => {
                      addToArchiveHandler(item.note, item.note._id);
                    }}
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

      <h3> Notes:</h3>
      <div className="note-display-container">
        {filterData.map((item) => {
          return (
            <>
              <div className={`note-display-card ${item.note.color}`}>
                <div className="note-display-title">
                  <p>{item.note.title}</p>
                  <BsPin
                    onClick={() =>
                      notesDispatch({ type: "PIN", payload: item.note.id })
                    }
                  />
                </div>
                <div className="note-display-body">
                  <p>
                    {" "}
                    {item.note.body.length > 0 || item.note.title.length > 0
                      ? parse(item.note.body)
                      : "EMPTY NOTE"}
                  </p>
                </div>
                <div className="note-display-labels">
                  {item.note.label.map((name) => {
                    return <div className="chip">{name}</div>;
                  })}
                </div>
                {item.note.priority.length > 0 && (
                  <div className="note-display-priority">
                    <div className="chip">{item.note.priority}</div>
                  </div>
                )}
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
                    onClick={() => {
                      addToArchiveHandler(item.note, item.note._id);
                    }}
                  />
                  <MdDelete
                    onClick={() =>
                      notesDispatch({ type: "TRASH", payload: item.note._id })
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
export { NoteDisplayCard };
