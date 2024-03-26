"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.8);

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mb-20 sm:mb-28 sm:px-16"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:rafliferdian25@gmail.com" className="underline">
          rafliferdian25@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
        className="flex flex-col mt-10 dark:text-black"
      >
        <input
          required
          name="senderEmail"
          maxLength={500}
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10 transition-all dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:outline-none md:w-1/2 lg:w-1/3"
        />

        <textarea
          required
          name="message"
          maxLength={5000}
          placeholder="Your message"
          className="h-52 p-4 my-3 rounded-lg border border-black/10 transition-all dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:outline-none"
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
