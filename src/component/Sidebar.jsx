import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

const drawerWidth = "75%"; // Define the width of the drawer

export const SidebarCompnent = ({ open, onClose }) => {
  const drawerItems = [
    { text: "Home", icon: <HomeIcon />, path: "#hero" },
    { text: "Skills", icon: <GiTechnoHeart />, path: "#skills" },
    { text: "projects", icon: <FaProjectDiagram />, path: "#projects" },
    {
      text: "About",
      icon: <InfoIcon className=" text-gray-400" />,
      path: "#about",
    },
  ];

  return (
    <div className="">
      {/* Temporary Drawer for mobile and small screens */}
      <Drawer
        variant="temporary"
        open={open}
        anchor="right"
        onClose={onClose} // Use handleDrawerClose for better UX
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            xl: "none",
            xxl: "none",
          },

          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <div className="bg-gray-700 p-8 h-full text-white">
          <div className=" flex justify-between">
            <h2 className="font-bold text-2xl flex">Satpreet singh</h2>
            <motion.span
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 2, delay: 3 }}
            >
              <IconButton onClick={onClose}>
                <FaHandPointRight color="white" />
              </IconButton>
            </motion.span>
          </div>
          <ul className="mt-6 space-y-1">
            {drawerItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className="block w-full"
                onClick={onClose}
              >
                <motion.li
                  className="flex gap-4 p-3 rounded-2xl items-center focus:bg-gray-600"
                  initial={{ x: 100, opacity: 0 }}
                  whileTap={{ scale: 0.8 }}
                  animate={open ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                >
                  <i>{item.icon}</i>
                  <span>{item.text}</span>
                </motion.li>
              </a>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
