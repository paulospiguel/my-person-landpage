import Sticky from "./Sticky";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import tw, { css } from "twin.macro";

const FirstAndSecondSection: React.FC = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  return (
    <Sticky className="flex justify-center w-full second">
      <First />

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #fff",
          opacity: frameOpacity,
          scale: frameScale,
        }}
      >
        <h1 className="mt-4 text-2xl font-bold uppercase ">
          Site em construção...
        </h1>
      </motion.div>
    </Sticky>
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  return (
    <Sticky
      className="flex justify-center w-full fist"
      motionStyle={{ scale: firstScale }}
    >
      teste
    </Sticky>
  );
};
export default FirstAndSecondSection;
