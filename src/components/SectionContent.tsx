import React from "react";
import tw, { styled } from "twin.macro";

import { BaseProps } from "../types";

const Section = styled.section`
  ${tw`relative`}

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

interface SectionContentProps extends BaseProps {}

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  ...props
}) => {
  return <Section {...props}>{children}</Section>;
};

export default SectionContent;
