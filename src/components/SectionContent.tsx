import React from "react";
import tw, { styled } from "twin.macro";

import { BaseProps } from "../types";

const Section = styled.section`
  ${tw`relative flex justify-center flex-1 w-full h-screen bg-gray-200`}

  .first {
    background-color: "";
    overflow: hidden;
  }

  .second {
    background-color: "";
    overflow: hidden;
  }

  .third {
    background-color: "";
    overflow: hidden;
  }

  .fourth {
    background-color: "";
    overflow: hidden;
  }
`;

interface SectionContentProps extends BaseProps { }

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  ...props
}) => {
  return <Section className={`${props.className} snap-center`} {...props}>{children}</Section>;
};

export default SectionContent;
