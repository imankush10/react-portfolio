import { useEffect, useState } from "react";
import "./Cursor.scss";
import { motion, easeIn, cubicBezier } from "framer-motion";
const Cursor = () => {
  const [pos, setPos] = useState({ x: 15, y: 15 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: pos.x + 10, y: pos.y + 10 }}
      transition={{ duration: 1.1, ease: cubicBezier(0.19, 1, 0.22, 1) }}
    ></motion.div>
  );
};

export default Cursor;
