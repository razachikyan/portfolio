import cx from "classnames";
import { experiences } from "../../components/feature/sections/experience/mock";
import { education } from "../../components/feature/sections/education/mock";
import { formatDate } from "../../components/feature/genericList/utils";
import { PersonalData } from "../../components/feature/personalData";
import { Container } from "../../components/feature/container";
import { SkillsTab } from "../../components/feature/skillsTab";
import { Header } from "../../components/feature/header";
import { Footer } from "../../components/feature/footer";
import { Main } from "../../components/feature/main";

import styles from "./styles.module.css";

export const ResumePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main className={styles.main}>
        <Container>
          <PersonalData />
          <div className={styles.pair}>
            <div className={styles.contacts}>
              <h3 className={styles.label}>Contacts</h3>
              <div className={styles.contact}>
                <img
                  src="/icons/location.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>Yerevan - Armenia</span>
              </div>
              <div className={styles.contact}>
                <img
                  src="/icons/phone.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>+374 77-233-577</span>
              </div>
              <div className={styles.contact}>
                <img
                  src="/icons/email.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>razmikachikyan5@gmail.com</span>
              </div>
            </div>
            <div className={styles.profile}>
              <h3 className={styles.label}>Profile</h3>
              <p className={styles.text}>
                Experienced in building user-friendly and responsive web
                applications. Proficient in React and Next.js, with additional
                experience in developing backend applications (Express.js),
                mobile applications (React Native), and desktop applications
                (Electron.js). Skilled in vanilla JavaScript and have
                contributed to projects using C++, Python, and Rust. Experienced
                in working on a variety of Web3 projects. Demonstrates
                flexibility in adapting to unfamiliar technologies and tools,
                with a proven ability to solve diverse problems. Possesses
                strong teamwork, communication, and problem-solving skills,
                backed by over 2 years of combined professional experience.
              </p>
            </div>
          </div>
          <div className={styles.skills}>
            <h3 className={styles.label}>SKILLS</h3>
            <SkillsTab />
          </div>
          <div className={cx(styles.pair, styles.last)}>
            <div className={styles.experience}>
              <h3 className={styles.label}>Experience</h3>
              <div className={styles.infoList}>
                {experiences.map(
                  ({ end, link, location, logo, start, summary, title }) => (
                    <div className={styles.info}>
                      <a className={styles.logo} href={link}>
                        <img
                          src={logo}
                          width={20}
                          height={20}
                          alt="company logo"
                        />
                      </a>
                      <p className={styles.company}>
                        {title} {location} {formatDate(start)} -{" "}
                        {formatDate(end)}
                      </p>
                      <p className={styles.text}>{summary}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.education}>
              <h3 className={styles.label}>Education</h3>
              <div className={styles.infoList}>
                {education.map(
                  ({ end, link, location, logo, start, summary, title }) => (
                    <div className={styles.info}>
                      <a className={styles.logo} href={link}>
                        <img src={logo} width={20} height={20} alt="UNI logo" />
                      </a>
                      <p className={styles.university}>
                        {title} {location} {formatDate(start)} -{" "}
                        {formatDate(end)}
                      </p>
                      <p className={styles.text}>{summary}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
};
