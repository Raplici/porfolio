import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import raplinimeImg from "@/public/images/raplinime.jpeg";
import personalwebImg from "@/public/images/personalweb.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    company: "Tako.id",
    description:
      "After high school, I volunteered as a front-end developer for Tako.id. This experience has been instrumental in my ongoing web development journey.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Raplinime",
    description:
      "Raplinime is a catalog website for anime fans, allowing users to keep track of their favorite series.",
    githubUrl: "https://github.com/Raplici/raplinime",
    demoUrl: "https://raplinime.com",
    imageUrl: raplinimeImg,
  },
  {
    title: "Portfolio Website",
    description: "A website that provides information about myself.",
    githubUrl: "https://github.com/Raplici/porfolio",
    demoUrl: null,
    imageUrl: personalwebImg,
  },
] as const;
