import { Grid } from "@mui/material";
import React from "react";
import Myprofile from "../assets/Myprofile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  // SEO optimized roles with targeted keywords
  const roles = [
    "MERN Stack Developer", // Types this first
    1000, // Waits 1s
    "React.js Developer",
    1000,
    "Node.js Developer", 
    1000,
    "JavaScript Developer",
    1000,
    "Express.js Developer",
    1000,
    "Full Stack Developer",
    1000,
  ];

  // Add structured data and meta tags for SEO
  React.useEffect(() => {
    // Update page title and meta description
    document.title = "Satpreet Singh - MERN Stack Developer | React.js | Node.js | JavaScript Expert";
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Satpreet Singh - Expert MERN Stack Developer specializing in React.js, Node.js, Express.js, and JavaScript. Full-stack web development with 3+ years experience building scalable applications.";

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "MERN developer, JavaScript developer, React.js developer, Node.js developer, Express developer, full stack developer, web developer, MongoDB, React, Node, Express, JavaScript, HTML, CSS, portfolio";

    // Add structured data for person/developer
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Satpreet Singh",
      "jobTitle": "MERN Stack Developer",
      "description": "Expert MERN Stack Developer specializing in React.js, Node.js, Express.js, and JavaScript development",
      "knowsAbout": ["MERN Stack", "React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Full Stack Development", "Web Development"],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "description": "MERN Stack Developer with expertise in React.js, Node.js, Express.js, and JavaScript"
      },
      "url": window.location.origin,
      "sameAs": [
        "https://linkedin.com/in/satpreet-singh",
        "https://github.com/satpreetsingh"
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, []);

  return (
    <div id="hero" className=" h-fit m-auto align-end mt-15 " itemScope itemType="https://schema.org/Person">
      {/* SEO optimized content with semantic HTML and schema markup */}
      <meta itemProp="name" content="Satpreet Singh" />
      <meta itemProp="jobTitle" content="MERN Stack Developer" />
      <meta itemProp="description" content="Expert MERN Stack Developer specializing in React.js, Node.js, Express.js, and JavaScript development" />
      
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
          {/* SEO optimized heading with developer keywords */}
          <h1 className="text-4xl sm:text-6xl p-2 mt-20 font-bold bg-gradient-to-r from-blue-100 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-100" itemProp="name">
            {t('hero.greeting')} Satpreet Singh
          </h1>

          {/* SEO optimized subheading with job title */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white" itemProp="jobTitle">
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h2>
          
          {/* Hidden SEO text for search engines */}
          <div className="sr-only">
            <p itemProp="description">
              Expert MERN Stack Developer with 3+ years of experience in JavaScript, React.js, Node.js, Express.js, and MongoDB. 
              Specialized in full-stack web development, building scalable applications and modern web solutions.
            </p>
            <span itemProp="knowsAbout">MERN Stack, JavaScript Developer, React.js Developer, Node.js Developer, Express Developer, MongoDB, Full Stack Development</span>
          </div>
          
          <br />
          <motion.span
            className="mx-auto sm:ml-2 text-white mt-6 cursor-pointer text-center rounded-2xl p-3 w-40 border-3 border-l-0
             border-r-0 border-b-blue-400 border-t-blue-400 relative block bg-gradient-to-r from-transparent via-cyan-500/50"
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <a
              href="/Satpreet_Singh _MERN_3.6_years.pdf"
              download="Satpreet_Singh _MERN_3.6_years.pdf"
            >
              {t('hero.contact')}
            </a>
          </motion.span>
        </Grid>
      </Grid>
    </div>
  );
};
