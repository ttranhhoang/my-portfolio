"use client";
import { staggerContainer } from "@/utils";
import { motion } from "framer-motion";
import React from "react";

const SectionWrapper = (
  Component: React.FunctionComponent,
  id: string,
  title: string
) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="page-section"
        id={id}
      >
        <h2 className="heading_title">{title}</h2>
        <hr className="divider" />
        <Component />
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper;
