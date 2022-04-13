import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ noteContent, setNoteContent }) => {
  return (
    <ReactQuill
      theme="snow"
      value={noteContent.body}
      onChange={(e) => {
        setNoteContent((noteContent) => ({
          ...noteContent,
          body: e,
        }));
      }}
      className={`${noteContent.color}`}
      modules={modules}
      formats={formats}
      placeholder="Take a Note..."
    />
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code",
];

export { Editor };
