import React, { useState, useEffect } from "react";
import { Button, Container, Icon, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaCode, FaVoicemail } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Slogo from "../assets/Slogo.png";
import { motion } from "framer-motion";
import { SidebarCompnent } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();

  // SEO optimization for navigation
  useEffect(() => {
    // Add navigation structured data
    const navStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Satpreet Singh - MERN Stack Developer Portfolio",
      "description": "Professional portfolio of MERN Stack developer specializing in JavaScript, React.js, Node.js, Express.js development",
      "url": window.location.origin,
      "author": {
        "@type": "Person",
        "name": "Satpreet Singh",
        "jobTitle": "MERN Stack Developer",
        "description": "Expert JavaScript developer, React.js developer, Node.js developer, Express.js developer",
        "sameAs": [
          "https://www.linkedin.com/in/satpreet-bachhal-1bbb381b4/",
          "https://github.com/satpreets234",
          "https://leetcode.com/u/satpreet699/"
        ]
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Satpreet Singh",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "description": "MERN Stack developer with expertise in JavaScript, React.js, Node.js, Express.js development"
        }
      }
    };

    let navScript = document.getElementById('nav-structured-data');
    if (!navScript) {
      navScript = document.createElement('script');
      navScript.id = 'nav-structured-data';
      navScript.type = 'application/ld+json';
      document.head.appendChild(navScript);
    }
    navScript.textContent = JSON.stringify(navStructuredData);
  }, []);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const MotionContainer = motion.create(Container);

  return (
    <div className="pt-10 ms-2 pe-2" itemScope itemType="https://schema.org/Person">
      {/* SEO meta tags for navigation */}
      <meta itemProp="name" content="Satpreet Singh" />
      <meta itemProp="description" content="MERN Stack developer specializing in JavaScript, React.js, Node.js, Express.js development" />
      <meta itemProp="jobTitle" content="MERN Stack Developer" />
      
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
            {t('nav.home')}
          </a>
          <a className=" hover-underline-animation center" href="#skills">
            {t('nav.skills')}
          </a>
          <a className=" hover-underline-animation center" href="#projects">
            {t('nav.projects')}
          </a>
          <a className=" hover-underline-animation center" href="#about">
            {t('nav.about')}
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
          <ThemeToggle />
          <LanguageSelector />
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
