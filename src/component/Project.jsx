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
import PitchStage from '../assets/Pitchstage.png';
import SocialBlaze from '../assets/Socialblaze.png';
import Baztel from '../assets/esim.png';
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
    interval: 2000,
    stopOnHover: true,
    infiniteLoop: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    showIndicators: true,
    swipeable: true,
  };

  const techStack = {
    react: { icon: <FaReact className="text-[#61DAFB]" /> },
    node: { icon: <FaNodeJs className="text-[#68A063]" /> },
    mongodb: { icon: <SiMongodb className="text-[#47A248]" /> },
    firebase: { icon: <SiFirebase className="text-[#e3e721]" /> },
    ethereum: { icon: <SiEthereum className="text-[#dbe1db]" /> },
    web3: { icon: <SiWeb3Dotjs className="text-[#dbd567]" /> },
    mysql: { icon: <FaNodeJs className="text-[#00758F]" /> },
  };

  const projects = [
    {
      title: "Social Blaze",
      description:
        "A comprehensive social media management platform for creating posts across different connectors, scheduling content, automating with RSS feeds, and managing everything in calendar view.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "NodeJs", key: "node" },
        { name: "MongoDB", key: "mongodb" },
      ],
      image:SocialBlaze,
      live: "https://socialblaze.ai/",
    },
    {
      title: "Baztel eSIM",
      description:
        "An innovative eSIM purchasing platform that allows travelers to easily buy and activate eSIMs for any destination they plan to visit, ensuring seamless connectivity worldwide.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "NodeJs", key: "node" },
        { name: "MongoDB", key: "mongodb" },
      ],
      image: Baztel,
      live: "https://baztel.co/",
    },
    {
      title: "Pitchset",
      description:
        "A powerful pitch deck and presentation management platform that helps businesses create, organize, and deliver compelling presentations with professional templates and collaboration features.",
      technologies: [
        { name: "ReactJs", key: "react" },
        { name: "NodeJs", key: "node" },
        { name: "MongoDB", key: "mongodb" },
      ],
      image: PitchStage,
      live: "https://pitchset.com/",
    },

  ];

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
                  className="m-5 mb-10 text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
                >
                  <img className="rounded-t-2xl h-80 w-full object-cover transition-transform duration-500 hover:scale-105" src={item.image} alt="" />
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
                  className="m-3  text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
                >
                  <img className="rounded-t-2xl h-72 w-full object-cover transition-transform duration-500 hover:scale-105" src={item.image} alt="" />
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
                  className=" mb-20 text-start cursor-pointer gap-5 rounded-2xl transition-all ease-out duration-300 hover:-translate-y-5 shadow-lg hover:shadow-blue-500/50 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
                >
                  <img className="rounded-t-2xl h-72 w-full object-cover transition-transform duration-500 hover:scale-105" src={item.image} alt="" />
                  <div className="text-white p-3">
                    <h5 className="text-2xl ">{item.title}</h5>
                    <p className="text-gray-100">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item?.technologies?.map((tech, i) => (
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
