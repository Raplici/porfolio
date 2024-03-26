"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import Project from "@/components/project-card";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="container scroll-mt-28 mb-28 sm:px-16"
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="gap-4 max-[864px]:flex max-[864px]:flex-col min-[864px]:columns-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
