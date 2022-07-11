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
      width: "fit",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  return (
    <>
      <div className={styles.divFather}>
        <button className={styles.buttonDelete} onClick={handleEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.svgButton}
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
          </svg>
        </button>

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
