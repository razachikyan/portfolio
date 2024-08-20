import styles from "./styles.module.css";
import { IInputProps } from "./types";

export const Input = ({
  onChange,
  value,
  disabled = false,
  type = "text",
}: IInputProps): JSX.Element => {
  return (
    <input
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
      className={styles.Input}
    ></input>
  );
};
