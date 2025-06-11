import { useEffect, useState } from "react";

import { app, database } from "../../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function NoteDetails({ ID }) {
  const [singleNote, setSingleNote] = useState({});

  const getSingleNote = async () => {
    if (ID) {
      const singleNote = doc(database, "notes", ID);
      const data = await getDoc(singleNote);
      setSingleNote({ ...data.data(), id: data.id });
    }
  };

  useEffect(() => {
    getSingleNote();
  }, [ID]);

  return (
    <>
      <h2>{singleNote.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: singleNote.noteDesc }}></div>
    </>
  );
}
