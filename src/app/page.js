"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import NoteOperations from "@/app/pages/components/NoteOperations";
import NoteDetails from "@/app/pages/components/NoteDetails";
import styles from "@/app/styles/Evernote/Evernote.module.scss";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [ID, setID] = useState(null);

  const getSingleNote = (id) => {
    setID(id)
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <NoteOperations getSingleNote={getSingleNote} />
          </div>
          <div className={styles.right}>
            <NoteDetails ID={ID} />
          </div>
        </div>
      </main>
    </div>
  );
}
