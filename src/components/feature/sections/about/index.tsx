import { Container } from "../../container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Image } from "../../../../components/shared/image";
import { repositories, social } from "./mock";
import classNames from "classnames";
import { TypeAnimation } from "react-type-animation";
import { SectionTitle } from "../../sectionTitle";

import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

export const About = (): JSX.Element => {
  const isTab = useMediaQuery({ maxWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 450 });

  return (
    <section id="about" className={styles.about}>
      <Container className={styles.container}>
        <SectionTitle>About</SectionTitle>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          pagination
        >
          <SwiperSlide>
            <TypeAnimation
              sequence={[
                `Frontend developer experiences in creating user-friendly and
              responsive web applications. Specialized in front-end development
              while also contributing to back-end and mobile development.
              Ability to adapt to unfamiliar technologies and tools,
              demonstrating flexibility in solving a variety of problems.`,
              ]}
              wrapper="p"
              cursor={true}
              speed={50}
              className={styles.descr}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>
              <a className={styles.git} href="https://github.com/razachikyan">
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  size={isMobile ? 150 : isTab ? 100 : 180}
                  className={styles.github}
                />
                <span className={styles.me}>@razachikyan</span>
              </a>
              <div className={styles.repos}>
                <ul className={styles.repoList}>
                  {repositories.map(({ url, name, image }, i) => (
                    <li key={i} className={styles.repoItem}>
                      <a rel="noreferrer" target="_blank" href={url}>
                        <Image
                          size={isTab ? 80 : 120}
                          src={image}
                          alt={name}
                          className={styles.repo}
                        />
                      </a>
                      <span className={styles.repoName}>{name}</span>
                    </li>
                  ))}
                  <li className={classNames(styles.repoItem, styles.lastItem)}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/razachikyan?tab=repositories"
                    >
                      <Image
                        size={isTab ? 80 : 120}
                        src="/icons/see-more.svg"
                        alt="see more"
                        className={styles.repo}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ul className={styles.socialList}>
              {social.map(({ url, name, image }, i) => (
                <li key={i} className={styles.socialItem}>
                  <a href={url}>
                    <Image
                      className={styles.repo}
                      size={isMobile ? 50 : isTab ? 100 : 180}
                      src={image}
                      alt={name}
                    />
                  </a>
                  <span className={styles.socialName}>{name}</span>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
