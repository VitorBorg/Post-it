import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./NotesGrid.module.css";
import Note from "../note/Note";

export default function NotesGrid() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/posts";

    axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        //console.log(response.data);
        setNotes(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <ul className={styles.ulNote}>
          {notes
            .map((note) => (
              <li className={styles.liNote} key={note.idpost}>
                <Note
                  title={note.titlepost}
                  body={note.textpost}
                  id={note.idpost}
                />
              </li>
            ))
            .reverse()}
        </ul>
      </div>
    </>
  );
}
