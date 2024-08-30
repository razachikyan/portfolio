import classNames from "classnames";
import { Image } from "../image";
import { IModalProps } from "./types";

import styles from "./styles.module.css";

export const Modal = ({
  open,
  icon,
  onClose,
  children,
  className,
}: IModalProps): JSX.Element => {
  return (
    <>
      {open && (
        <>
          <div onClick={onClose} className={styles.background} />
          <div className={classNames(styles.modal, className)}>
            {icon && <Image alt="close" className={styles.icon} src={icon} />}
            {children}
          </div>
        </>
      )}
    </>
  );
};
