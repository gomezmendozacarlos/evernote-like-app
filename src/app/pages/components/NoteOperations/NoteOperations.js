"use client";
import { useState } from "react";
import styles from "@/app/styles/NoteOperation/NoteOperation.module.scss";

const NoteOperations = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="note-operations">
      NoteOperations
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NoteOperations;
