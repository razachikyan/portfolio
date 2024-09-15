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
  name = "",
  required = false,
}: IInputProps): JSX.Element => {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      required={required}
      className={classNames(styles.Input, className)}
      placeholder={placeholder}
    >
      {icon && <img src={icon} alt="icon" />}
    </input>
  );
};
