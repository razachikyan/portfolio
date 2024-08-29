import { IContainerProps } from "./types";

import styles from "./styles.css";
import classNames from "classnames";

export const Container = ({
  children,
  className,
}: IContainerProps): JSX.Element => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
