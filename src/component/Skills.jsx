import { Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  FaBootstrap,
  FaBox,
  FaEthereum,
  FaImages,
  FaM,
  FaNoteSticky,
  FaPaperPlane,
  FaAws,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiWeb3Dotjs,
  SiSolidity,
  SiPostman,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiHibernate,
  SiSpringboot,
  SiRedux,
  SiSwagger,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { DiGoogleCloudPlatform } from "react-icons/di";
export const Skills = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  // useEffect(()=>{
  //     AOS.refresh()
  // },[]);

  const Mernstacklist = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <RiNextjsFill />, name: "Nextjs" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiMysql />, name: "MySql" },
    { icon: <IoLogoJavascript />, name: "Javascript" },
    { icon: <SiTypescript />, name: "Typescript" },
  ];
  const OtherTools = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiHibernate />, name: "Hibernate" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
  ];
  const ToolsSkills = [
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <SiWeb3Dotjs />, name: "Web3.Js" },
    { icon: <SiSwagger />, name: "Swagger" },
    { icon: <FaAws />, name: "AWS S3, EC2" },
    { icon: <DiGoogleCloudPlatform />, name: "Gcp" },
  ];

  const mernstackTech = [...Mernstacklist, ...Mernstacklist];
  const otherTools = [...OtherTools, ...OtherTools];
  const toolsTech = [...ToolsSkills, ...ToolsSkills, ...ToolsSkills];

  return (
    <div id="skills" className="h-fit    w-full overflow-hidden py-8 mt-30">
      <Container className="relative contain-content pb-10 ">
        <div className="mt-29 left-0  h-100 w-50 absolute z-10 backgroundColorsLeft"></div>
        <div className="mt-29 ms-auto h-100 right-0 w-50 absolute z-10 backgroundColorsRight"></div>
        <div className="flex justify-center">
          <h1 className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech
          </h1>
          <h1 className="font-bold ms-2 text-white" data-aos="fade-left">
            Stack
          </h1>
        </div>
        <motion.div
          className="flex gap-3 items-center mt-15 "
          animate={{ x: ["-30%", "0%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {mernstackTech.map((item, index) => (
            <div
              className="lex flex-col items-center justify-center p-3 shadow-lg hover:shadow-blue-500/50 rounded-xl bg-gray-600
             border-1 border-white hover:border-cyan-400  cursor-pointer 
             transition-all duration-300"
              key={`${item.name}-${index}`}
            >
              <motion.div
                className="text-4xl text-cyan-400 mb-2 text-center ms-7 me-7"
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {item.icon}
              </motion.div>
              <span className="text-sm mt-2 text-white">{item.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3 items-center mt-10"
          animate={{ x: ["0%", "-30%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {otherTools.map((item, index) => (
            <div
              className="lex flex-col items-center justify-center p-3 shadow-lg hover:shadow-blue-500/50 rounded-xl bg-gray-600
             border-1 border-white hover:border-cyan-400  cursor-pointer 
             transition-all duration-300"
              key={`${item.name}-${index}`}
            >
              <motion.div
                className="text-4xl text-cyan-400 mb-2 text-center ms-7 me-7"
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {item.icon}
              </motion.div>
              <span className="text-sm mt-2 text-white">{item.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3 items-center mt-10"
          animate={{ x: ["-30%", "0%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {toolsTech.map((item, index) => (
            <div
              className="lex flex-col items-center justify-center p-3 shadow-lg hover:shadow-blue-500/50 rounded-xl bg-gray-600
             border-1 border-white hover:border-cyan-400  cursor-pointer 
             transition-all duration-300"
              key={`${item.name}-${index}`}
            >
              <motion.div
                className="text-4xl text-cyan-400 mb-2 text-center ms-7 me-7"
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {item.icon}
              </motion.div>
              <span className="text-sm mt-2 text-white">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};
