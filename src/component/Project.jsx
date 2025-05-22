import React, { useEffect } from "react";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaVoicemail,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Slogo from "../assets/Slogo.png";
import { motion, stagger } from "framer-motion";
import {
  CircularProgress,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import { SiEthereum, SiFirebase, SiMongodb, SiWeb3Dotjs } from "react-icons/si";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
export const Projects = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmScreen = useMediaQuery(theme.breakpoints.between("sm"));

  const Variant = {
    autoPlay: true,
    interval: 10000, // 3 seconds between slides
    stopOnHover: true, // pause on hover
    infiniteLoop: true,
    showArrows: true,
    showThumbs: false,
    showStatus: false,
  };

  const techStack = {
    react: { icon: <FaReact className="text-[#61DAFB]" /> },
    node: { icon: <FaNodeJs className="text-[#68A063]" /> },
    mongodb: { icon: <SiMongodb className="text-[#47A248]" /> },
    firebase: { icon: <SiFirebase className="text-[#e3e721]" /> },
    ethereum: { icon: <SiEthereum className="text-[#dbe1db]" /> },
    web3: { icon: <SiWeb3Dotjs className="text-[#dbd567]" /> },
  };

  const projects = [
    {
      title: "Architech Solutions",
      description:
        "Developed a scalable and secure architect portfolio, enabling architects to showcase projects.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "NodeJs", key: "node" },
        { name: "MongoDB", key: "mongodb" },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/trusty-sentinel-397012.appspot.com/o/architect.png?alt=media&token=853a190a-9636-40d0-b4ac-b3b4dc30319b",
      live: "https://itsbambrahcreation.vercel.app/",
      code: "https://github.com/kambi22/ArchitectPortfolio",
    },
    {
      title: "Nfts Marketplace",
      description:
        "Developed a system allowing users to mint NFTs uniquely associated with the owner's address and a unique token ID.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "Ethereum", key: "ethereum" },
        { name: "Web3.Js", key: "web3" },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/trusty-sentinel-397012.appspot.com/o/marketplace.png?alt=media&token=0f3cf3a5-50d1-4dd3-a5d0-4fc8b5c07743",
      live: "https://github.com/kambi22/NFTMarketPlace",
      code: "https://github.com/kambi22/NFTMarketPlace",
    },
    {
      title: "Quora Clone",
      description:
        "Develop a Quora-style website where users can post content, ask questions, and provide answers to others’ queries.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "NodeJs", key: "node" },
        { name: "Firebase", key: "firebase" },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/trusty-sentinel-397012.appspot.com/o/Quora.png?alt=media&token=143de12e-57aa-4972-9a37-34cb7fb18f95",
      live: "https://quora-4666c.web.app/",
      code: "https://github.com/kambi22",
    },
  ];
  const skills = projects.title;
  console.log("skills are:", skills);

  return (
    <div id="projects" className=" h-full mt-30 pb-40    w-full m-auto">
      <Container>
        <div className="flex justify-center mb-20 ">
          <h1 className="font-bold p-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My
          </h1>
          <h1 className="font-bold ms-2 text-white mt-2" data-aos="fade-down">
            Projects
          </h1>
        </div>
        {isXlScreen ? (
          <Carousel
            {...Variant}
            className=" "
            centerMode={true}
            centerSlidePercentage={33.33}
          >
            {projects.map((item, i) => (
              <div className="" data-aos="slide-up">
                <div
                  key={i}
                  className="m-5 mb-10 text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50"
                >
                  <img className="rounded-2xl h-60" src={item.image} alt="" />
                  <div className="text-white p-3">
                    <h5 className="text-2xl ">{item.title}</h5>
                    <p className="text-gray-100">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 bg-cyan-950/30 px-2 py-1 rounded-full border border-cyan-500/20"
                        >
                          <span className="text-base">
                            {techStack[tech.key].icon}
                          </span>
                          <span className="text-xs text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-cyan-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <RiExternalLinkFill className="mt-1 me-1" />
                        Live
                      </a>
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-purple-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <FaCode className="mt-1 me-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : isSmScreen ? (
          <Carousel
            {...Variant}
            className=""
            centerMode={true}
            centerSlidePercentage={50}
          >
            {projects.map((item, i) => (
              <div className="" data-aos="slide-up">
                <div
                  key={i}
                  className="m-3  text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50"
                >
                  <img className="rounded-2xl h-60" src={item.image} alt="" />
                  <div className="text-white p-3">
                    <h5 className="text-2xl ">{item.title}</h5>
                    <p className="text-gray-100">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 bg-cyan-950/30 px-2 py-1 rounded-full border border-cyan-500/20"
                        >
                          <span className="text-base">
                            {techStack[tech.key].icon}
                          </span>
                          <span className="text-xs text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-cyan-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <RiExternalLinkFill className="mt-1 me-1" />
                        Live
                      </a>
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-purple-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <FaCode className="mt-1 me-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel {...Variant} className=" pb-10">
            {projects.map((item, i) => (
              <div className="" data-aos="slide-up">
                <div
                  key={i}
                  className=" mb-20 text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50"
                >
                  <img className="rounded-2xl h-60" src={item.image} alt="" />
                  <div className="text-white p-3">
                    <h5 className="text-2xl ">{item.title}</h5>
                    <p className="text-gray-100">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 bg-cyan-950/30 px-2 py-1 rounded-full border border-cyan-500/20"
                        >
                          <span className="text-base">
                            {techStack[tech.key].icon}
                          </span>
                          <span className="text-xs text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-cyan-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <RiExternalLinkFill className="mt-1 me-1" />
                        Live
                      </a>
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-2 outline-purple-500 rounded-2xl ps-5 pe-5 pt-2 pb-2 shadow-sm hover:shadow-blue-500 flex"
                      >
                        <FaCode className="mt-1 me-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </Container>
      <a href="#hero">
        <FaHandPointUp
          className="ms-auto me-5 animate-bounce transition-all duration:200 ease-inout"
          color="white"
          size={60}
        />
      </a>
    </div>
  );
};
