import { duration, Grid, Typography } from "@mui/material";
import React from "react";
import Myprofile from "../assets/Myprofile.jpeg";

import { TypeAnimation } from "react-type-animation";
import { hover, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
export const HeroSection = (props) => {
  const roles = [
    "MERN Stack Developer", // Types this first
    1000, // Waits 1s
    "React.js Developer",
    1000,
    "Node.js Developer",
    1000,
  ];

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <div id="hero" className=" h-fit m-auto align-end mt-15 ">
      <Grid className=" mt-5 " container spacing={1}>
        <Grid
          className="h-fit w-full p-1  content-center "
          size={{ xl: 6, md: 6, sm: 12, xs: 12 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            className="rounded-full shadow-lg shadow-blue-500/50 p-2   m-auto max-w-md min-w-xs bg-white "
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img className="rounded-full" src={Myprofile} alt="Profile image" />
          </motion.div>
        </Grid>
        <Grid
          className="h-full text-center sm:text-start space-y-5 w-110"
          size={{ xl: 6, md: 6, sm: 12, xs: 12 }}
        >
          <p className="text-4xl sm:text-6xl p-2  mt-20 font-bold bg-gradient-to-r from-blue-100 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-100">
            Hi I'm Satpreet Singh
          </p>

          <TypeAnimation
            sequence={roles}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="text-2xl sm:text-4xl font-bold text-white "
          />
          <br />
          <motion.span
            className="mx-auto sm:ml-2 text-white mt-3 cursor-pointer text-center rounded-2xl p-3 w-40 border-3 border-l-0
             border-r-0 border-b-blue-400 border-t-blue-400 relative block bg-gradient-to-r from-transparent via-cyan-500/50"
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <a
              // href="/resume.pdf"
              href="/Satpreet_Singh _MERN_3.0_years.pdf"
              download="Satpreet_Singh _MERN_3.0_years.pdf"
            >
              My Resume
            </a>
          </motion.span>
        </Grid>
      </Grid>
    </div>
  );
};
