"use client";
import { useState } from "react";
import { app, database } from "../../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import styles from "@/app/styles/NoteOperation/NoteOperation.module.scss";
import ClientOnlyQuillEditor from "../../components/QuillEditor/";

const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const dbInstance = collection(database, "notes");

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
    });
  };

  const addDesc = (value) => {
    setNoteDesc(value);
  };

  return (
    <div className="note-operations">
      <button onClick={inputToggle} className={styles.button}>
        Add new note
      </button>
      {isInputVisible ? (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Enter the Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <div className={styles.ReactQuill}>
            <ClientOnlyQuillEditor
              value={editorContent}
              onChange={setEditorContent}
            />
          </div>
          <button onClick={saveNote} className={styles.saveBtn}>
            Save Note
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NoteOperations;
