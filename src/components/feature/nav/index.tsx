import { useState } from "react";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../../../contexts/ThemeContext";
import { INavProps } from "./types";
import { Image } from "../../../components/shared/image";
import { ThemeToggle } from "../themeToggle";

import styles from "./styles.module.css";

export const Nav = ({
  items,
  className,
  itemClassName,
  direction = "row",
}: INavProps): JSX.Element => {
  const isTab = useMediaQuery({ maxWidth: 1200 });
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <nav className={styles.container}>
      <button className={styles.btn} onClick={() => setOpen(true)}>
        <Image alt="hamburger" src={`/icons/menu-${theme}.svg`} size={50} />
      </button>
      {(!isTab || open) && (
        <ul
          style={{ flexDirection: direction }}
          className={classNames(styles.list, className)}
        >
          {isTab && (
            <>
              <button className={styles.close} onClick={() => setOpen(false)}>
                <Image alt="close" src={`/icons/close.svg`} size={50} />
              </button>
              <li className={styles.toggle}>
                <ThemeToggle />
              </li>
            </>
          )}
          {items.map((item, i) => (
            <li className={classNames(styles.item, itemClassName)} key={i}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
