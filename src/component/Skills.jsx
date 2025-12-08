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
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  
  // SEO optimization for Skills section
  useEffect(() => {
    // Add structured data for technical skills
    const skillsStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Satpreet Singh",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "MERN Stack Developer",
        "skills": [
          "JavaScript Developer",
          "React.js Developer", 
          "Node.js Developer",
          "Express.js Developer",
          "MongoDB Developer",
          "Full Stack Development",
          "TypeScript",
          "Next.js",
          "Redux",
          "MySQL",
          "AWS",
          "Git",
          "REST APIs"
        ]
      },
      "knowsAbout": [
        "MERN Stack",
        "JavaScript Development",
        "React.js Development",
        "Node.js Development", 
        "Express.js Development",
        "MongoDB",
        "Full Stack Web Development",
        "Frontend Development",
        "Backend Development",
        "Database Management",
        "Cloud Computing"
      ]
    };

    let skillsScript = document.getElementById('skills-structured-data');
    if (!skillsScript) {
      skillsScript = document.createElement('script');
      skillsScript.id = 'skills-structured-data';
      skillsScript.type = 'application/ld+json';
      document.head.appendChild(skillsScript);
    }
    skillsScript.textContent = JSON.stringify(skillsStructuredData);
  }, []);
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
    <div id="skills" className="h-fit w-full overflow-hidden py-8 mt-30" itemScope itemType="https://schema.org/Person">
      {/* SEO meta tags for Skills section */}
      <meta itemProp="name" content="Satpreet Singh" />
      <meta itemProp="description" content="Expert MERN developer with skills in JavaScript, React.js, Node.js, Express.js development and modern web technologies" />
      <meta itemProp="jobTitle" content="MERN Stack Developer" />
      
      <Container className="relative contain-content pb-10 ">
        <div className="mt-29 left-0  h-100 w-50 absolute z-10 backgroundColorsLeft"></div>
        <div className="mt-29 ms-auto h-100 right-0 w-50 absolute z-10 backgroundColorsRight"></div>
        
        <div className="flex justify-center">
          <h1 className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('skills.title')}
          </h1>
          <h1 className="font-bold ms-2 text-white" data-aos="fade-left">
            {t('skills.titleBold')}
          </h1>
        </div>
        
        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p itemProp="description">
            Expert MERN Stack Developer with comprehensive skills in JavaScript development, React.js development, Node.js development, 
            Express.js development, and modern web technologies. Specialized in full-stack web development.
          </p>
          <span itemProp="knowsAbout">MERN Stack, JavaScript Developer, React.js Developer, Node.js Developer, Express Developer, MongoDB, TypeScript, Next.js, Redux</span>
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
