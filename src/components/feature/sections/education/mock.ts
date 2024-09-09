import { IEducation } from "./types";

export const education: Array<IEducation> = [
  {
    title: "National Polytechnic University of Armenia",
    start: new Date("2020-09-01"),
    end: new Date("2022-06-01"),
    link: "https://polytech.am/",
    logo: "/images/npua.png",
    summary: "Bachelor 1-3 course. Learning Information Security.",
    location: "Yerevan",
  },
  {
    title: "Synopsys Armenia Educational Department",
    start: new Date("2024-09-01"),
    end: new Date("2024-06-01"),
    link: "https://www.synopsys.com/company/contact-synopsys/office-locations/armenia.html",
    logo: "/images/synopsys.jpg",
    summary:
      "Bachelor 3-4 course. Learning EDA (Electronic Design Automation), Computer Science.",
    location: "Yerevan",
  },
];
