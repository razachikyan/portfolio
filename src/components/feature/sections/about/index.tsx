import { Container } from "../../../../components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Image } from "../../../../components/shared/image";
import { repositories } from "./mock";

import styles from "./styles.module.css";
import classNames from "classnames";

export const About = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <h3 className={styles.title}>About</h3>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          <SwiperSlide>
            <p className={styles.descr}>
              Frontend developer experiences in creating user-friendly and
              responsive web applications. Specialized in front-end development
              while also contributing to back-end and mobile development.
              Ability to adapt to unfamiliar technologies and tools,
              demonstrating flexibility in solving a variety of problems.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>
              <a className={styles.git} href="https://github.com/razachikyan">
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  size={180}
                  className={styles.github}
                />
                <span className={styles.me}>razachikyan</span>
              </a>
              <div className={styles.repos}>
                <span className={styles.subtitle}>Repos</span>
                <ul className={styles.repoList}>
                  {repositories.map(({ url, name, image }) => (
                    <li className={styles.repoItem}>
                      <a href={url}>
                        <Image
                          size={120}
                          src={image}
                          alt={name}
                          className={styles.repo}
                        />
                      </a>
                      <span className={styles.repoName}>{name}</span>
                    </li>
                  ))}
                  <li className={classNames(styles.repoItem, styles.lastItem)}>
                    <a href="https://github.com/razachikyan?tab=repositories">
                      <Image
                        size={120}
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
          <SwiperSlide>Social</SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
