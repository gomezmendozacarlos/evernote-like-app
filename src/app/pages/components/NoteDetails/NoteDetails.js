import { useEffect, useState } from "react";

import { app, database } from "../../../../../firebaseConfig";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const dbInstance = collection(database, "notes");

export default function NoteDetails({ ID }) {
  const [singleNote, setSingleNote] = useState({});
  
  const getSingleNote = async () => {
    if (ID) {
      const singleNote = doc(database, "notes", ID);
      const data = await getDoc(singleNote);
      setSingleNote({ ...data.data(), id: data.id });
    }
  };
  
  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      setSingleNote(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })[0]
      );
    });
  };

  useEffect(() => {
    getSingleNote();
  }, [ID]);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <h2>{singleNote.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}></div>
    </>
  );
}
