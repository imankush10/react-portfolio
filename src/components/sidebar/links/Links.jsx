import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 30,
  },
  closed: {
    opacity: 0,
    y: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          whileHover={{ scale: 1.15 }}
          href={`#${item}`}
          variants={itemVariants}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
