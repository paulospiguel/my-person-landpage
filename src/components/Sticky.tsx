import { BaseProps } from "@/types";
import { motion, MotionStyle } from "framer-motion";
import React from "react";
import tw, { css, styled } from "twin.macro";

interface StickyProps extends BaseProps {
  motionStyle?: MotionStyle;
}

const StyledSticky = styled.div`
  ${tw`sticky top-0 left-0 right-0 w-full h-screen`}
`;

const style = css``;

const Sticky: React.FC<StickyProps> = ({ children, motionStyle, ...props }) => {
  return (
    <StyledSticky {...props}>
      <motion.div style={motionStyle}>{children}</motion.div>
    </StyledSticky>
  );
};

export default Sticky;
