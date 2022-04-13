import "./ChipContainer.css";
import { ImCancelCircle } from "react-icons/im";

const ChipContainer = ({ setNoteContent, noteContent }) => {
  return (
    <div className="chip-container">
      {noteContent.label.map((item) => {
        return (
          <div class="chip">
            {item}{" "}
            <ImCancelCircle
              onClick={() =>
                setNoteContent((noteContent) => {
                  const labelNote = noteContent.label.filter(
                    (name) => name != item
                  );
                  return { ...noteContent, label: labelNote };
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export { ChipContainer };
