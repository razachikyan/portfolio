import styles from "./styles.module.css";
import { IButtonProps } from "./types";

export const Button = ({ onClick }: IButtonProps): JSX.Element => {
  return <button onClick={onClick} className={styles.Button}></button>;
};
