import styles from "./styles.module.css";
import { IModalProps } from "./types";

export const Modal = ({ open, onClose }: IModalProps): JSX.Element => {
  return (
    <>
      {open && (
        <>
          <div onClick={onClose} className={styles.background} />
          <div className={styles.modal} />
        </>
      )}
    </>
  );
};
