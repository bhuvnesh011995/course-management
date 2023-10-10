import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CommonQuillTextEditor = ({
  callback,
  editorValue,
  setEditorValue,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  const handleValueChange = (value) => {
    if (setEditorValue) setEditorValue(value);
    if (callback) callback(value);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        onChange={handleValueChange}
        value={editorValue}
        className="editor-input"
        modules={modules}
      />
      <p dangerouslySetInnerHTML={{ __html: "data<b>boom</b>" }}></p>
    </div>
  );
};
