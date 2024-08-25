import { IExperience } from "./types";

export const experiences: IExperience[] = [
  {
    title: "Optimum Partners",
    start: new Date(2024, 5),
    end: "Present",
    location: "Yerevan",
    summary:
      "Leading the development of web applications with a focus on optimizing user experience and performance. Collaborating closely with cross-functional teams to deliver high-quality, scalable solutions. Independently tackling complex tasks and contributing to code reviews, ensuring best practices.",
    logo: "/images/op.jpg",
    link: "https://www.optimumpartners.com/",
  },
  {
    title: "Solicy",
    start: new Date(2023, 4),
    end: new Date(2024, 5),
    location: "Yerevan",
    summary:
      "Developed responsive web and mobile applications using modern frameworks and tools. Engaged in both collaborative and independent work, delivering key features and bug fixes. Assisted in the continuous improvement of codebase quality through refactoring and testing.",
    logo: "/images/solicy.jpg",
    link: "https://solicy.net/",
  },
  {
    title: "Megafon",
    start: new Date(2022, 4),
    end: new Date(2022, 8),
    location: "Yerevan (Remote)",
    summary:
      "Collaborated on full-stack demo projects, gaining hands-on experience with frontend and backend technologies. Contributed to the design and implementation of core features, enhancing the overall functionality of demo applications. Worked remotely while maintaining strong communication with the team.",
    logo: "/icons/megafon.svg",
    link: "https://moscow.megafon.ru/",
  },
];

export const formatDate = (date: Date | 'Present'): string => {
  return date === 'Present' ? date : date.toDateString().split(" ").slice(1).join(" ");
};