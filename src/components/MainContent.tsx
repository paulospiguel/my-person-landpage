import React from "react";
import { BaseProps } from "../types";

interface MainContentProps extends BaseProps {}

const MainContent: React.FC<MainContentProps> = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};

export default MainContent;
