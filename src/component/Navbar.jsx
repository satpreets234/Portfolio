import React, { useState } from "react";
import { Button, Container, Icon, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaCode, FaVoicemail } from "react-icons/fa6";
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
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden pointer-events-none">
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
            Satpreet Singh
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

        <nav className="gap-5 mt-2 text-white ms-auto font-bold hidden md:flex items-center">
          <div className="relative group">
            <a 
              href="https://www.linkedin.com/in/satpreet-bachhal-1bbb381b4/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 block"
            >
              <FaLinkedin size={20} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </div>

          <div className="relative group">
            <a 
              href="https://github.com/satpreets234" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 block"
            >
              <FaGithub size={20} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </div>

          <div className="relative group">
            <a 
              href="mailto:singhsatpreet13@gmail.com" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 block"
            >
              <MdEmail size={22} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email
            </span>
          </div>

          <div className="relative group">
            <a 
              href="https://leetcode.com/u/satpreet699/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 block"
            >
              <FaCode size={22} />
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LeetCode
            </span>
          </div>
        </nav>
        <div className="ms-auto block sm:hidden p-0">
          <IconButton
            className="cursor-pointer p-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MdOutlineMenuOpen size={30} color="white" />
          </IconButton>
          {/* <p>Test</p> */}
        </div>
      </MotionContainer>
    </div>
  );
};
