"use client";

import ReactQuill from "react-quill-new";

// This modules object configures editor features like toolbar
const modules = {
  // toolbar what tools appear in the UI
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image"],
  ],
};

// Defines what is preserved in the content when editing
// (The functionality of the toolbar tools)
const formats = [
  "header",
  "bold",
  "color",
  "background",
  "italic",
  "underline",
  "blockquote",
  "code-block",
  "list",
  "align",
  "size",
  "link",
  "image",
];

const ClientOnlyQuillEditor = ({onChange, value}) => {
  return (
    <div className="max-w-[1000px] mx-auto mt-10">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
export default ClientOnlyQuillEditor;