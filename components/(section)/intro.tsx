"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import {
  SiFramer,
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="home" ref={ref} className=" container sm:px-16 scroll-mt-96">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col w-full">
          <div className="flex mb-1 items-center gap-1 text-2xl sm:mb-0 sm:gap-2 sm:text-4xl dark:text-slate-400">
            <span>hi!</span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>

          <div className="dark:text-slate-300">
            <span className="mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 sm:text-7xl">
              I&apos;m <strong className="tracking-wide ">Rafli </strong>
              Ferdian,
            </span>

            <span className="flex flex-col text-base sm:text-xl dark:text-slate-400">
              <span className="block">
                a{" "}
                <strong className="font-bold dark:text-slate-300">
                  front-end developer{" "}
                </strong>
                who loves intuitive,
              </span>
              <span>clean and modern UI design.</span>
            </span>
          </div>
        </div>

        <div className="flex gap-2.5 mt-6 sm:mt-8">
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="min-w-[128px] group flex px-7 py-3 items-center gap-2 rounded-full bg-gray-900 text-white outline-none transition hover:scale-110 hover:bg-gray-950 dark:hover:bg-gray-800"
          >
            Contact me
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          <a
            title="Resume"
            href="https://drive.google.com/file/d/1vfzwqwX1tkeSz3t94lZAL9mV0y3fISjQ/view?usp=sharing"
            target="_blank"
            className="cursor-pointer font-bold text-slate-700 dark:text-slate-400 flex px-5 py-3 items-center gap-1 bg-transparent outline-none transition hover:scale-110"
          >
            <AiFillFileText />
            RESUME
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col gap-10 max-w-[346px] mt-20 text-sm tracking-wide dark:text-slate-400 sm:mt-32 sm:gap-7 sm:flex-row"
      >
        <div className="flex flex-col gap-2.5">
          current favorite tech stack:
          <ul className="flex items-center gap-3.5 text-slate-700 dark:text-slate-500">
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 2 } }}
            >
              <SiReact
                title="React"
                size={24}
                className="transition duration-200 hover:text-[#61DAFB]"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 3 } }}
            >
              <SiNextdotjs
                title="Next.js"
                size={24}
                className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 4 } }}
            >
              <SiTypescript
                title="Typescript"
                size={24}
                className="transition duration-200 hover:text-[#3178C6]"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 5 } }}
            >
              <SiFramer
                title="Framer Motion"
                size={24}
                className="transition duration-200 hover:text-[#0055FF]"
              />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 6 } }}
            >
              <SiTailwindcss
                title="Tailwind CSS"
                size={24}
                className="transition duration-200 hover:text-[#06B6D4]"
              />
            </motion.li>
          </ul>
        </div>

        <div className="bg-gray-300 h-16 w-0.5 rounded-full hidden sm:block dark:bg-opacity-20" />

        <div className="flex flex-col gap-2.5">
          other profiles:
          <ul className="flex items-center gap-3.5 text-slate-700 dark:text-slate-500">
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 7 } }}
              title="https://github.com/Raplici"
              href="https://github.com/Raplici"
              target="_blank"
            >
              <SiGithub
                size={24}
                className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]"
              />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * 8 } }}
              title="https://www.linkedin.com/in/rafli-ferdian-tsany/"
              href="https://www.linkedin.com/in/rafli-ferdian-tsany/"
              target="_blank"
            >
              <SiLinkedin
                size={24}
                className="transition duration-200 hover:text-[#0055FF]"
              />
            </motion.a>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
