import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "../../interfaces/interfaces";
import { Modal, Grow } from "@mui/material";

export default function ModalConfirm({
  title,
  children,
  openModal,
  handleClose,
  confirmTitle,
  handleModalConfirm,
}: ModalProps) {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div className={styles.modal}>
        <Grow in={openModal} className={styles.inModal}>
          <div>
            <h1>{title}</h1>
            <div className={styles.body}>
              <p>{children}</p>
            </div>
            {handleModalConfirm && (
              <footer className={styles.footer}>
                <button className="invertedbutton" onClick={handleClose}>
                  Cancelar
                </button>
                <button
                  className="standardbutton"
                  onClick={() => handleModalConfirm()}
                >
                  {confirmTitle}
                </button>
              </footer>
            )}
          </div>
        </Grow>
      </div>
    </Modal>
  );
}
