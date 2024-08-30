import styles from "./styles.module.css";
import { IInputProps } from "./types";

export const Input = ({
  icon,
  value,
  onChange,
  disabled = false,
}: IInputProps): JSX.Element => {
  return (
    <input
      onChange={onChange}
      value={value}
      disabled={disabled}
      className={styles.Input}
    >
      {icon && <img src={icon} alt="icon" />}
    </input>
  );
};
