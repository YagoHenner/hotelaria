import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "../../interfaces/interfaces";

function Modal({ title, children, setOpenModal, handleModalConfirm }:ModalProps) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Fechar
          </button>
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>
          <p>{children}</p>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => handleModalConfirm()}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;