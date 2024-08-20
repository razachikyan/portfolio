import styles from "./styles.module.css";
import { IMainProps } from "./types";

export const Main = ({}: IMainProps): JSX.Element => {
  return <main className={styles.main}></main>;
};
