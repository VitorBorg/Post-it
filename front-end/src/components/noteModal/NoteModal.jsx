import React, { useEffect, useState } from "react";

import styles from "./NoteModal.module.css";

import deletePost from "../../pages/api/DeletePost";
import UpdatePost from "../../pages/api/UpdatePost";

export default function NoteModal(props) {
  const [postTitle, setPostTitle] = useState(props.title);
  const [postText, setPostText] = useState(props.body);

  const handleDelete = () => {
    deletePost(props.id);
  };

  const handleSubmitPost = async (e) => {
    try {
      e.preventDefault();

      UpdatePost(props.id, postTitle, postText);

      setPostTitle("");
      setPostText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTitle = async (e) => {
    setPostTitle(e);
  };

  const handleChangeText = async (e) => {
    setPostText(e);
  };

  return (
    <>
      <div className={styles.divFather}>
        <button className={styles.buttonDelete} onClick={handleDelete}>
          <span>X</span>
        </button>

        <form onSubmit={handleSubmitPost} className={styles.formSearch}>
          <div className={styles.div}>
            <h1 className={styles.title}>
              <input
                type="text"
                name="title"
                placeholder="Título"
                className={styles.inputNote}
                value={postTitle}
                onChange={(e) => handleChangeTitle(e.target.value)}
                required
              ></input>
            </h1>
            <p className={styles.body}>
              <textarea
                name="body"
                placeholder="Escreva uma anotação..."
                className={styles.areaNote}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                required
              ></textarea>
            </p>

            <button className={styles.buttonSend} type="submit">
              <span>+</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
