import NoteOperations from "@/app/pages/components/NoteOperations";
import styles from "@/app/styles/Evernote/Evernote.module.scss";
import Head from "next/head";

export default function Home() {
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
            <NoteOperations />
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </main>
    </div>
  );
}
