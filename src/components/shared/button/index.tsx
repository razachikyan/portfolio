import classNames from "classnames";
import { IButtonProps } from "./types";

import styles from "./styles.module.css";

export const Button = ({
  onClick,
  className = "",
  children,
  CSS = {},
  type = "button",
}: IButtonProps): JSX.Element => {
  return (
    <button
      style={CSS}
      onClick={onClick}
      type={type}
      className={classNames(styles.Button, className)}
    >
      {children}
    </button>
  );
};
