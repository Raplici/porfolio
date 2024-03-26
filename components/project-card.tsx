"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-0 last:mb-0"
    >
      <section
        className="relative bg-gray-100 mb-3 border border-black/5 rounded-lg overflow-hidden sm:h-[400px] sm:mb-8 xl:h-80 last:mb-0 transition hover:bg-gray-200 
      dark:bg-white/5 dark:hover:bg-white/10"
      >
        <Image
          src={imageUrl}
          alt={title}
          quality={96}
          className="h-40 object-cover object-top block xl:hidden"
        />

        <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:px-7 sm:pt-7 xl:pl-10 sm:h-[240px] xl:h-full xl:pr-2 xl:pt-10 xl:max-w-[50%]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 mb-5 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <div className="flex items-center mt-auto gap-5 text-slate-700 dark:text-slate-500">
            {demoUrl !== "" && (
              <a title={demoUrl} href={demoUrl} target="_blank">
                <FaLink
                  size={24}
                  className="transition duration-200 hover:text-[#0055FF] dark:hover:text-[#FFFFFF]"
                />
              </a>
            )}

            {githubUrl !== "" && (
              <a title={githubUrl} href={githubUrl} target="_blank">
                <SiGithub
                  size={24}
                  className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]"
                />
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden xl:block top-8 -right-40 w-[402px] rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
