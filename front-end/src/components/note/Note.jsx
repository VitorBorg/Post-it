import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import NoteModal from "../noteModal/NoteModal";

import styles from "./Note.module.css";

import deletePost from "../../pages/api/DeletePost";

export default function Note(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    deletePost(props.id);
  };

  const handleEdit = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  return (
    <>
      <div className={styles.divFather}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>X</button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleEdit}
          style={customStyles}
        >
          <NoteModal title={props.title} body={props.body} id={props.id} />
        </Modal>

        <div className={styles.div}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.body}>{props.body}</p>
        </div>
      </div>
    </>
  );
}
