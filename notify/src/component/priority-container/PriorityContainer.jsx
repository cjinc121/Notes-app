import "./PriorityContainer.css";
const PriorityContainer = ({ setNoteContent, noteContent }) => {
  function isChecked(note, priorityName) {
    if (note.priority === priorityName) return true;
    return false;
  }
  return (
    <div className="priority-container">
      <label>
        <input
          name="priority-radio"
          checked={isChecked(noteContent, "HIGH")}
          type="radio"
          onClick={() =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              priority: "HIGH",
            }))
          }
        />
        High
      </label>
      <label>
        <input
          name="priority-radio"
          checked={isChecked(noteContent, "MID")}
          type="radio"
          onClick={() =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              priority: "MID",
            }))
          }
        />
        Mid
      </label>
      <label>
        <input
          name="priority-radio"
          checked={isChecked(noteContent, "LOW")}
          type="radio"
          onClick={() =>
            setNoteContent((noteContent) => ({
              ...noteContent,
              priority: "LOW",
            }))
          }
        />
        Low
      </label>
    </div>
  );
};
export { PriorityContainer };
