import React, { useEffect, useState } from "react";

import styles from "./NoteModal.module.css";

//import deletePost from "../../pages/api/DeletePost";

export default function NoteModal(props) {
  const handleEdit = () => {
    deletePost(props.id);
  };

  return (
    <>
      <div className={styles.divFather}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleEdit}>X</button>
        <div className={styles.div}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.body}>{props.body}</p>
        </div>
      </div>
    </>
  );
}
