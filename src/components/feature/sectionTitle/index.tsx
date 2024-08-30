import classNames from "classnames";
import { ISectionTitleProps } from "./types";

import styles from "./styles.module.css";

export const SectionTitle = ({ children, className }: ISectionTitleProps) => {
  return <h3 className={classNames(styles.title, className)}>{children}</h3>;
};
