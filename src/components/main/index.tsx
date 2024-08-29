import styles from "./styles.css";
import { IMainProps } from "./types";

export const Main = ({ children }: IMainProps): JSX.Element => {
  return <main className={styles.main}>{children}</main>;
};
