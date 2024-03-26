"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="container mb-28 leading-8 scroll-mt-28 sm:px-16 dark:text-slate-300"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        <span className="font-semibold">I&apos;m a front-end developer</span>{" "}
        from Indonesia, with a passion for creating{" "}
        <span className="font-semibold">
          user-friendly and visually appealing web applications.
        </span>{" "}
        Graduated from SMK Telkom Malang in 2023, and I&apos;ve been a volunteer
        at <span className="font-semibold">tako.id</span> ever since.
      </p>

      <p className="mb-3">
        I am proficient in{" "}
        <span className="font-semibold">
          React, Next.js, Tailwind CSS, Framer Motion, and TypeScript.
        </span>{" "}
        I&apos;m also familiar with{" "}
        <span className="font-semibold">Prisma, Node.js, and PostgreSQL.</span>{" "}
        I&apos;m always eager to learn new technologies and improve my skills.
      </p>

      <p>
        When I&apos;m not coding, I enjoy playing games, listening to music, or
        hanging out with friends on Discord. I am also an avid reader and I
        enjoy learning about new things.
      </p>
    </motion.section>
  );
}
