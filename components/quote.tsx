"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="container my-20 sm:px-16 w-full "
    >
      <div className="flex items-center justify-center py-8">
        <blockquote className="relative mx-auto max-w-screen-md text-center">
          <div className="relative z-10">
            <p className="text-gray-800 sm:text-xl dark:text-slate-300">
              <em>
                "Don&apos;t wait for inspiration. It comes while working"
              </em>
            </p>
          </div>

          <footer className="mt-6">
            <div className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Henri Matisse
            </div>
          </footer>
        </blockquote>
      </div>
    </motion.section>
  );
}
