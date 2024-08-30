import { Image } from "../../../components/shared/image";
import { IEntry } from "../../../types/shared";
import { GenericListProps } from "./types";
import { formatDate } from "./utils";
import { Box } from "../box";

import styles from "./styles.module.css";

export const GenericList = <T extends IEntry>({
  items,
}: GenericListProps<T>) => {
  return (
    <Box className={styles.box}>
      {items.map(({ title, end, location, start, summary, logo, link }: T) => {
        return (
          <div className={styles.item}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.main}
            >
              <Image size={50} className={styles.logo} src={logo} alt={title} />
              <h4 className={styles.name}>{title}</h4>
            </a>
            <span className={styles.date}>
              {formatDate(start)} - {formatDate(end)}
            </span>
            <span className={styles.location}>{location}</span>
            <p className={styles.descr}>{summary}</p>
          </div>
        );
      })}
    </Box>
  );
};
