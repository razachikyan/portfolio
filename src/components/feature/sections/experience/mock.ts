import { IExperience } from "./types";

export const experiences: IExperience[] = [
  {
    title: "Optimum Partners",
    start: new Date(2024, 5),
    end: new Date(2024, 9),
    location: "Yerevan Armenia",
    summary: `Contributed to the development of a web application,
demonstrating proficiency in front-end development using
technologies like React, NextJS, pure JavaScript, and Pug.`,
    logo: "/images/op.jpg",
    link: "https://www.optimumpartners.com/",
  },
  {
    title: "Solicy",
    start: new Date(2023, 4),
    end: new Date(2024, 5),
    location: "Yerevan Armenia",
    summary: `Specialized in developing web applications with a focus on 
ReactJS and NextJS. Utilized React Native and Expo for mobile 
projects, and ExpressJS for backend development. Managed 
databases using SQL, MongoDB, and PostgreSQL. Demonstrated 
versatility by working both collaboratively in teams and 
independently`,
    logo: "/images/solicy.jpg",
    link: "https://solicy.net/",
  },
  {
    title: "Megafon",
    start: new Date(2022, 4),
    end: new Date(2022, 8),
    location: "Moscow Russia (Remote)",
    summary:
      "As a Full Stack Developer, I specialize in building web applications using TypeScript, ReactJS, and Node.js.",
    logo: "/icons/megafon.svg",
    link: "https://moscow.megafon.ru/",
  },
];

export const formatDate = (date: Date | "Present"): string => {
  return date === "Present"
    ? date
    : date.toDateString().split(" ").slice(1).join(" ");
};
