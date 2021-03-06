import { useNotesContext } from "../../context/notes-context";
import { MdOutlineUnarchive, MdDelete } from "react-icons/md";
import "../note-display/noteDisplay.css";
import parse from "html-react-parser";
import { useEffect } from "react";

const ArchiveDisplayCard = () => {
  const {
    notesState,
    restoreFromArchiveshandler,
    deleteFromArchivesHandler,
    getArchivedNotesHandler,
  } = useNotesContext();
  useEffect(() => {
    getArchivedNotesHandler();
  }, []);
  return (
    <>
      <div className="note-display-container" style={{ margin: " auto " }}>
        <h3>
          {notesState.notes.filter(
            (item) => item.isArchive === true && item.isTrash === false
          ).length > 0
            ? "ARCHIVED NOTES"
            : "No Notes In Archive"}
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
                    onClick={() => {
                      restoreFromArchiveshandler(item.note, item.note._id);
                    }}
                  />
                  <MdDelete
                    onClick={() => {
                      deleteFromArchivesHandler(item.note._id);
                    }}
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
