import cx from "classnames";
import { IMainProps } from "./types";

import styles from "./styles.module.css";

export const Main = ({ children, className }: IMainProps): JSX.Element => {
  return <main className={cx(styles.main, className)}>{children}</main>;
};
