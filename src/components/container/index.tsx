import { IContainerProps } from "./types";

import styles from "./styles.module.css";

export const Container = ({ children }: IContainerProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
