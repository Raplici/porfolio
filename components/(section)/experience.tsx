"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="container scroll-mt-28 mb-28 sm:mb-40 sm:px-16"
    >
      <SectionHeading>Experience</SectionHeading>

      <VerticalTimeline
        layout="1-column-left"
        lineColor=""
        className="!mx-0 !w-full"
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(14,18,34,255)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "20px 32px",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "6.4px solid #9ca3af"
                    : "6.4px solid rgba(255,255,255,0.25)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                color:
                  theme === "light"
                    ? "rgba(3, 7, 18, 0.8)"
                    : "rgba(203, 213, 225)",
                background:
                  theme === "light" ? "rgba(249, 250, 251)" : "rgba(2, 6, 23)",
                boxShadow:
                  theme === "light"
                    ? "0px 0px 0px 4px #e5e7eb"
                    : "0px 0px 0px 4px rgba(14,18,34,255)",
                fontSize: "24px",
              }}
            >
              <h3 className="font-semibold">{item.title}</h3>

              <p className="font-normal !mt-0">{item.company}</p>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
