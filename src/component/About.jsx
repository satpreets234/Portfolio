import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  // SEO optimization for About section
  useEffect(() => {
    // Add structured data for education and professional background
    const aboutStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Satpreet Singh",
      "description": "Full-stack MERN developer with expertise in JavaScript, React.js, Node.js, Express.js development",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Chandigarh College of Engineering & Technology",
          "description": "Bachelor of Engineering graduate specializing in software development"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "Army Public School Chandimandir",
          "description": "Science stream education with Physics, Chemistry & Mathematics"
        }
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "MERN Stack Developer",
        "description": "Expert in JavaScript development, React.js developer, Node.js developer, Express.js developer, MongoDB specialist"
      },
      "knowsAbout": [
        "MERN Stack Development",
        "JavaScript Developer",
        "React.js Developer", 
        "Node.js Developer",
        "Express.js Developer",
        "Full Stack Web Development",
        "Software Engineering"
      ]
    };

    let aboutScript = document.getElementById('about-structured-data');
    if (!aboutScript) {
      aboutScript = document.createElement('script');
      aboutScript.id = 'about-structured-data';
      aboutScript.type = 'application/ld+json';
      document.head.appendChild(aboutScript);
    }
    aboutScript.textContent = JSON.stringify(aboutStructuredData);
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const iconVariants = {
    initial: { scale: 1, filter: "drop-shadow(0 0 0 #22d3ee)" },
    hover: {
      scale: 1.19,
      filter: "drop-shadow(0 0 12px #22d3ee)",
      transition: { duration: 0.38, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 24px 0 rgba(6,182,212,0.10)",
    },
    hover: {
      scale: 1.04,
      y: -8,
      transition: { duration: 0.33, ease: "easeOut" },
    },
    float: {
      y: [0, -6, 0, 6, 0],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="about" className=" h-full mt-40  m-auto" itemScope itemType="https://schema.org/Person">
      {/* SEO meta tags for About section */}
      <meta itemProp="name" content="Satpreet Singh" />
      <meta itemProp="description" content="Full-stack MERN developer specializing in JavaScript, React.js, Node.js, Express.js development with engineering background" />
      <meta itemProp="jobTitle" content="MERN Stack Developer" />
      
      <Container className="">
        <div className="" data-aos="fade-up">
          <div className="flex justify-center">
            <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('about.title')}
            </h1>
            <h1 className="text-2xl ms-2 font-bold text-white">{t('about.titleBold')}</h1>
          </div>

          <p className="text-white text-2xl mt-3 bg-gra" itemProp="description">
            {t('about.description')}
          </p>
          
          {/* Hidden SEO content for search engines */}
          <div className="sr-only">
            <span itemProp="knowsAbout">MERN Stack, JavaScript Developer, React.js Developer, Node.js Developer, Express Developer, Full Stack Development</span>
            <span itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation">
              <span itemProp="name">Full Stack Developer</span>
              <span itemProp="description">Expert MERN developer specializing in JavaScript, React.js, Node.js, Express.js development</span>
            </span>
          </div>
        </div>
        <Grid container sx={{ marginTop: "70px" }} spacing={3}>
          <Grid
            item
            size={{ xl: 6, md: 6, sm: 12, xs: 12 }}
            className=""
            data-aos="fade-right"
          >
            <motion.div
              className="gap-y-4 relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent px-7 py-8 flex
               flex-col items-center justify-center text-center transition-all duration-300 bg-gradient-to-r from-transparent
                via-cyan-400/50 backdrop-blur-xl shadow-lg hover:shadow-blue-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover="hover"
              variants={cardVariants}
            >
              <span
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-3 border-l-0
             border-r-0 border-b-blue-400 border-t-blue-400  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22",
                  borderImage:
                    "linear-gradient(100deg, #06b6d4 0%, #3b82f6 100%) 1",
                }}
              />
              {/* Shimmer overlay */}
              <span className="absolute inset-0 pointer-events-none z-0 animate-shimmer opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <motion.div
                variants={iconVariants}
                className="relative z-20 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/30
               to-blue-500/20 shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 "
              >
                <span className="text-cyan-300 text-3xl group-hover:text-cyan-100 transition-all duration-300">
                  <FaGraduationCap size={50} />
                </span>
              </motion.div>
              <h5 className="text-white text-2xl sm:text-4xl " itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization">
                <span itemProp="name">{t('about.education.bachelor')}</span>
              </h5>
              <h3 className="text-white " itemProp="name">
                Chandigarh College of Engineering & Technology
              </h3>
              <p className="text-cyan-200">{t('about.education.year')}: 2018-2022</p>
               <p className="text-cyan-200">77%</p>
            </motion.div>
          </Grid>
          <Grid
            item
            size={{ xl: 6, md: 6, sm: 12, xs: 12 }}
            className=""
            data-aos="fade-left"
          >
            <motion.div
              className=" relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent
               px-7 py-8 flex flex-col items-center justify-center text-center transition-all duration-300
                bg-gradient-to-r from-transparent via-cyan-400/50 backdrop-blur-xl shadow-lg hover:shadow-blue-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover="hover"
              variants={cardVariants}
            >
              <span
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-3 border-l-0
             border-r-0 border-b-cyan-400 border-t-cyan-400  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22",
                  borderImage:
                    "linear-gradient(100deg, #06b6d4 0%, #3b82f6 100%) 1",
                }}
              />
              {/* Shimmer overlay */}
              <span className="absolute inset-0 pointer-events-none z-0 animate-shimmer opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <motion.div
                variants={iconVariants}
                className="relative z-20 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/30
               to-blue-500/20 shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300 "
              >
                <span className="text-cyan-300 text-3xl group-hover:text-cyan-100 transition-all duration-300">
                  <FaSchool size={50} />
                </span>
              </motion.div>
              <h5 className="text-white text-2xl sm:text-4xl " itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization">
                <span itemProp="name">{t('about.education.school')}</span>
              </h5>
              <h3 className="text-white mt-4" itemProp="name">
                Army Public School Chandimandir
              </h3>
              <p className="text-cyan-200 mt-4">{t('about.education.year')}: 2016-2018</p>
              <p className="text-cyan-200 mt-4">87%</p>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
