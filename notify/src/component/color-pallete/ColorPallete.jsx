import "./ColorPallete.css";

const ColorPallete = ({ setNoteContent }) => {
  return (
    <div className="color-pallete">
      <div
        className="color white"
        onClick={() =>
          setNoteContent((noteContent) => ({
            ...noteContent,
            color: "white",
          }))
        }
      ></div>
      <div
        className="color green"
        onClick={() =>
          setNoteContent((noteContent) => ({
            ...noteContent,
            color: "green",
          }))
        }
      ></div>
      <div
        className="color yellow"
        onClick={() =>
          setNoteContent((noteContent) => ({
            ...noteContent,
            color: "yellow",
          }))
        }
      ></div>
      <div
        className="color blue"
        onClick={() =>
          setNoteContent((noteContent) => ({
            ...noteContent,
            color: "blue",
          }))
        }
      ></div>
      <div
        className="color red"
        onClick={() =>
          setNoteContent((noteContent) => ({
            ...noteContent,
            color: "red",
          }))
        }
      ></div>
    </div>
  );
};
export { ColorPallete };
