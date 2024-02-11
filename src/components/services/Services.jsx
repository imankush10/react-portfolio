import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
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
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="headerSection">
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleSection">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="boxSection">
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            facilis provident optio sed magnam, facere neque, aperiam voluptate
            molestias itaque tenetur suscipit, dicta dignissimos cumque enim rem
            deserunt? Aliquid, dolore?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            facilis provident optio sed magnam, facere neque, aperiam voluptate
            molestias itaque tenetur suscipit, dicta dignissimos cumque enim rem
            deserunt? Aliquid, dolore?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            facilis provident optio sed magnam, facere neque, aperiam voluptate
            molestias itaque tenetur suscipit, dicta dignissimos cumque enim rem
            deserunt? Aliquid, dolore?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            facilis provident optio sed magnam, facere neque, aperiam voluptate
            molestias itaque tenetur suscipit, dicta dignissimos cumque enim rem
            deserunt? Aliquid, dolore?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
