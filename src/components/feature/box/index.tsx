import classNames from "classnames";
import { IBoxProps } from "./types";

import styles from "./styles.css";

export const Box = ({ children, className }: IBoxProps) => {
  return <div className={classNames(styles.box, className)}>{children}</div>;
};
