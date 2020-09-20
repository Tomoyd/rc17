import { useEffect } from "react";
import styles from "./index.less";

const Modal = ({ visible, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : null;
  }, [visible]);

  return (
    <div className={visible ? styles.modal : styles.modalOut} onClick={onClose}>
      hello world
    </div>
  );
};

export default Modal;
