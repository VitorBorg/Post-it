import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/Navbar";
import Note from "../components/note/Note";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "64px 60px 424px" }}>
        <Note />
      </main>
    </>
  );
}
