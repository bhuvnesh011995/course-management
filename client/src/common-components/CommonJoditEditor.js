import JoditEditor from "jodit-react";

export const CommonJoditEditor = ({
  callback,
  editorValue,
  setEditorValue,
}) => {
  return <JoditEditor value={editorValue} onChange={setEditorValue} />;
};
