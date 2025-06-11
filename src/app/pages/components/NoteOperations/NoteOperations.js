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

  const dbInstance = collection(database, "notes");

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      alert("itos")
      setNoteTitle("");
      setNoteDesc("");
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
            value={noteTitle}
          />
          <div className={styles.ReactQuill}>
            <ClientOnlyQuillEditor onChange={addDesc} value={noteDesc} />
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
