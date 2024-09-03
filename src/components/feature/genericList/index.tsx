import { Image } from "../../shared/image";
import { IEntry } from "../../../types/shared";
import { GenericListProps } from "./types";
import { formatDate } from "./utils";
import { Box } from "../box";

import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

export const GenericList = <T extends IEntry>({
  items,
}: GenericListProps<T>) => {
  const isMobile = useMediaQuery({maxWidth: 680})

  return (
    <Box className={styles.box}>
      {items.map(
        ({ title, end, location, start, summary, logo, link }: T, i) => {
          return (
            <div key={i} className={styles.item}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.main}
              >
                <Image
                  size={isMobile ? 150 : 50}
                  className={styles.logo}
                  src={logo}
                  alt={title}
                />
                <h4 className={styles.name}>{title}</h4>
              </a>
              <span className={styles.date}>
                {formatDate(start)} - {formatDate(end)}
              </span>
              <span className={styles.location}>{location}</span>
              <p className={styles.descr}>{summary}</p>
            </div>
          );
        }
      )}
    </Box>
  );
};
