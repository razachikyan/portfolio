import { IInputProps } from "./types";
import classNames from "classnames";

import styles from "./styles.module.css";

export const Input = ({
  icon,
  value,
  onChange,
  className = "",
  disabled = false,
  placeholder = "",
}: IInputProps): JSX.Element => {
  return (
    <input
      onChange={onChange}
      value={value}
      disabled={disabled}
      className={classNames(styles.Input, className)}
      placeholder={placeholder}
    >
      {icon && <img src={icon} alt="icon" />}
    </input>
  );
};
