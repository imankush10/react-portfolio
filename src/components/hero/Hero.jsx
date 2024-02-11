import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-650%",
    transition: { duration: 50, repeat: Infinity, repeatType: "mirror" },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span variants={textVariants}>ANKUSH KUMAR</motion.span>
          <motion.h1 variants={textVariants}>
            Web developer <br /> and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="splBtn" variants={textVariants}>
              See the latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            className="scrollImg"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
    </div>
  );
};

export default Hero;
