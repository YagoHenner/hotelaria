import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "../../interfaces/interfaces";
import { Modal, Grow } from "@mui/material";

export default function ModalConfirm({
  title,
  children,
  openModal,
  handleClose,
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
        <Grow in={openModal}>
          <div>
            <h1>{title}</h1>
            <div className={styles.body}>
              <p>{children}</p>
            </div>
            <div className={styles.footer}>
              <button className="invertedbutton" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="standardbutton"
                onClick={() => handleModalConfirm()}
              >
                Continue
              </button>
            </div>
          </div>
        </Grow>
      </div>
    </Modal>
  );
}
