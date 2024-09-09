import { Input } from "../../shared/input";
import { Image } from "../../shared/image";
import { Box } from "../box";

import styles from "./styles.module.css";

export const MailMe = () => {
  return (
    <Box className={styles.mailMe}>
      <div className={styles.top}>
        <Image src="/icons/gmail.svg" size={60} alt="gmail" />
        <h3 className={styles.title}>Mail me</h3>
      </div>
      <div className={styles.inputs}>
        <Input
          className={styles.from}
          placeholder="Your email address"
          value={""}
          onChange={() => {}}
        />
        <Input
          className={styles.input}
          placeholder="Input field"
          value={""}
          onChange={() => {}}
        />
      </div>
    </Box>
  );
};
