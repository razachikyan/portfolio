import classNames from "classnames";
import { INavProps } from "./types";

import styles from "./styles.css";

export const Nav = ({
  items,
  className,
  itemClassName,
  direction = "row",
}: INavProps): JSX.Element => {
  return (
    <nav className={styles.container}>
      <ul
        style={{ flexDirection: direction }}
        className={classNames(styles.list, className)}
      >
        {items.map((item, i) => (
          <li className={classNames(styles.item, itemClassName)} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
