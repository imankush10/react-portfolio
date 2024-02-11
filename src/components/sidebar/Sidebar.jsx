import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    opacity: 1,
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  initial: {
    opacity: 0,
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      initial="initial"
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
