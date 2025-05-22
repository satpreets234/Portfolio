import React, { useState } from "react";
import { Button, Container, Icon, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaPython, FaVoicemail } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Slogo from "../assets/Slogo.png";
import { motion } from "framer-motion";
import { SidebarCompnent } from "./Sidebar";

export const Header = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const MotionContainer = motion.create(Container);

  return (
    <div className="pt-10 ms-2 pe-2">
      <SidebarCompnent open={sidebarOpen} onClose={handleSidebar} />
      <MotionContainer className="flex text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg ">
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mt-2 flex">
          {/* <img src={Slogo} alt="S logo" style={{ height: '30px', width: '25px' }} /> */}

          <motion.p
            className="text-2xl ms-1"
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Satpreet
          </motion.p>
        </div>

        <nav className="hidden md:flex gap-10 me-3 text-white m-auto cursor-pointer">
          <a className=" hover-underline-animation center" href="#hero">
            Home
          </a>
          <a className=" hover-underline-animation center" href="#skills">
            Skills
          </a>
          <a className=" hover-underline-animation center" href="#projects">
            Projects
          </a>
          <a className=" hover-underline-animation center" href="#about">
            About
          </a>
          <motion.a
            className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
            initial={{ scaleX: 0 }}
            variants={{ hover: { scaleX: 1 } }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0.5 }} // Center the origin for scaling
          />
        </nav>

        <nav className="gap-5 mt-2 text-white ms-auto font-bold hidden md:flex">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <a href="https://github.com/satpreets234/">
              <FaLinkedin size={20} />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <a href="https://github.com/satpreets234">
              <FaGithub size={20} />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <MdEmail size={22} />
          </motion.div>
        </nav>
        <div className="ms-auto block sm:hidden p-0">
          <IconButton
            className="cursor-pointer p-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MdOutlineMenuOpen size={30} color="white" />
          </IconButton>
        </div>
      </MotionContainer>
    </div>
  );
};
