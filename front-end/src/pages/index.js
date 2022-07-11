import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/Navbar";
import InputNote from "../components/inputNote/InputNote";
import NotesGrid from "../components/notesGrid/NotesGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "64px 60px 424px" }}>
        <InputNote />
        <NotesGrid />
      </main>
    </>
  );
}
