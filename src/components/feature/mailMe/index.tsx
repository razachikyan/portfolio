import React, { useRef, useState } from "react";
import classNames from "classnames";
import emailjs from "emailjs-com";
import { Button } from "../../shared/button";
import { Input } from "../../shared/input";
import { Image } from "../../shared/image";
import { Box } from "../box";

import styles from "./styles.module.css";

export const MailMe = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_MAILER_SERVICE_ID || "",
          process.env.REACT_APP_MAILER_TEMPLATE_ID || "",
          formRef.current,
          process.env.REACT_APP_MAILER_USER_ID || ""
        )
        .then(
          (_) => {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 700);
            setEmail("");
            setName("");
            setMessage("");
          },
          (error) => {
            console.log("Email sending error:", error.text);
          }
        );
    }
  };

  return (
    <Box className={styles.mailMe}>
      <div
        className={classNames(styles.cover, { [styles.active]: showMessage })}
      >
        Thanks for reaching out! I will be in touch soon.
      </div>
      <div className={styles.top}>
        <Image src="/icons/gmail.svg" size={60} alt="gmail" />
        <h3 className={styles.title}>Mail me</h3>
      </div>
      <form ref={formRef} onSubmit={sendEmail} className={styles.inputs}>
        <Input
          className={styles.from}
          placeholder="Your full name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          className={styles.from}
          placeholder="Your email address"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          className={styles.input}
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" className={styles.button}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};
