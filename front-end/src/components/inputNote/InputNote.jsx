import React, { useEffect, useState } from "react";

import styles from "./InputNote.module.css";

import createPost from "../../pages/api/CreatePost";

export default function InputNote() {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  useEffect(() => {
    createPost(postTitle, postText);

    setPostTitle("");
    setPostText("");
  }, [postText, postTitle]);

  const handleSubmitPost = async (e) => {
    try {
      e.preventDefault();

      setPostTitle(e.target.title.value);
      setPostText(e.target.body.value);
      //sendPost();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTitle = async (e) => {
    //console.log(`Handle Name function ${e}!`);
  };

  return (
    <>
      <section className={styles.sectionSearch}>
        <div className={styles.divSearch}>
          <form onSubmit={handleSubmitPost} className={styles.formSearch}>
            <input
              type="text"
              name="title"
              placeholder="Título"
              className={styles.inputNote}
              onChange={(e) => handleChangeTitle(e.target.value)}
              required
            ></input>

            <textarea
              name="body"
              placeholder="Escreva uma anotação..."
              className={styles.areaNote}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
}
