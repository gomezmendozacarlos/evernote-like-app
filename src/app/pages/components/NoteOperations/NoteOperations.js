"use client";
import { useState, useEffect } from "react";
import { app, database } from "../../../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import styles from "@/app/styles/NoteOperation/NoteOperation.module.scss";
import ClientOnlyQuillEditor from "../../components/QuillEditor/";

const NoteOperations = ({ getSingleNote }) => {
  const [isInputVisible, setInputVisible] = useState(false);

  const dbInstance = collection(database, "notes");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const [notesArray, setNotesArray] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      setNotesArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      setNoteTitle("");
      setNoteDesc("");
      getNotes();
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
      <div className={styles.notesDisplay}>
        {notesArray.map((note) => {
          return (
            <div
              onClick={() => getSingleNote(note.id)}
              className={styles.notesInner}
              key={note.id}
            >
              <h4>{note.noteTitle}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteOperations;
