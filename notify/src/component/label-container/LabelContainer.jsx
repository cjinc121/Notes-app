import { useNotesContext } from "../../context/notes-context";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import "./LabelContainer.css";
const LabelContainer = ({
  showLabelContainer,
  setShowLabelContainer,
  setNoteContent,
  noteContent,
}) => {
  const { notesState, notesDispatch } = useNotesContext();
  const [currentLabel, setcurrentLabel] = useState("");
  function isChecked(note, labelName) {
    if (note.label.includes(labelName)) return true;
    return false;
  }
  return (
    <div className="label-container">
      <div className="label-input">
        <input
          type="text"
          placeholder="Add a label"
          onChange={(e) => setcurrentLabel(e.target.value)}
          value={currentLabel}
        />
        <AiOutlinePlus
          onClick={() => {
            currentLabel.length > 0 &&
              notesDispatch({
                type: "ADD_NEW_LABEL",
                payload: currentLabel,
              });
            setcurrentLabel("");
          }}
        />
        <ImCancelCircle
          onClick={() => setShowLabelContainer(!showLabelContainer)}
        />
      </div>
      <div className="labelList">
        {notesState.uniqueLabels.map((uniqueLabel) => {
          return (
            <div className="label-display-container" key={uniqueLabel}>
              <label>
                <input
                  checked={isChecked(noteContent, uniqueLabel)}
                  type="checkbox"
                  onClick={(e) => {
                    e.target.checked
                      ? setNoteContent((noteContent) => ({
                          ...noteContent,
                          label: [...noteContent.label, uniqueLabel],
                        }))
                      : setNoteContent((noteContent) => {
                          const labelNote = noteContent.label.filter(
                            (name) => name != uniqueLabel
                          );
                          return { ...noteContent, label: labelNote };
                        });
                  }}
                />
                {uniqueLabel}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { LabelContainer };
