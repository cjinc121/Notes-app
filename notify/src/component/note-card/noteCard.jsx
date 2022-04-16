import "./noteCard.css";
import { useEffect, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdLabelOutline, MdLowPriority } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useNotesContext } from "../../context/notes-context";
import { v4 as uuid } from "uuid";
import { LabelContainer } from "../label-container/LabelContainer";
import { ChipContainer } from "../chip-container/ChipContainer";
import { ColorPallete } from "../color-pallete/ColorPallete";
import { PriorityContainer } from "../priority-container/PriorityContainer";
import { Editor } from "../editor/editor";
import { Filter } from "../filter-container/Filter";
const NoteCard = ({ editable }) => {
  const [showColors, setShowColors] = useState(false);
  const [showLabelContainer, setShowLabelContainer] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [expand, setExpand] = useState(true);
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
    priority: "",
    label: [],
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
        priority: notesState.toEdit.priority,
        label: notesState.toEdit.label,
      });
    }
  }, []);
  return (
    <>
      <button
        className="filter-button button primary-button"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter
      </button>
      {showFilter && <Filter />}

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
            onClick={() => setExpand(true)}
          />
        </div>

        {expand && (
          <>
            <div className="note-card-body">
              <Editor
                noteContent={noteContent}
                setNoteContent={setNoteContent}
              />
            </div>

            <div className="note-card-footer">
              <div className="note-card-label">
                <p>{noteContent.date}</p>
                {
                  <ChipContainer
                    setNoteContent={setNoteContent}
                    noteContent={noteContent}
                  />
                }
                {noteContent.priority.length > 0 && (
                  <div className="chip">{noteContent.priority}</div>
                )}
              </div>
              <div className="note-buttons">
                <MdLowPriority
                  className="note-icon "
                  onClick={() => setShowPriority(!showPriority)}
                />
                {showPriority && (
                  <PriorityContainer
                    setNoteContent={setNoteContent}
                    noteContent={noteContent}
                  />
                )}

                <IoColorPaletteOutline
                  className="note-icon "
                  onClick={() => {
                    setShowColors(!showColors);
                  }}
                />
                {/* colorPallete */}
                {showColors && <ColorPallete setNoteContent={setNoteContent} />}

                <MdLabelOutline
                  className="note-icon "
                  onClick={() => setShowLabelContainer(!showLabelContainer)}
                />
                {showLabelContainer && (
                  <LabelContainer
                    setNoteContent={setNoteContent}
                    noteContent={noteContent}
                  />
                )}

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
                    setNoteContent({
                      id: uuid(),
                      title: "",
                      body: "",
                      date: currentDate,
                      color: "white",
                      priority: "",
                      label: [],
                    });
                    setShowColors(false);
                    setShowLabelContainer(false);
                    setShowPriority(false);
                    setExpand(false);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export { NoteCard };
