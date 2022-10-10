import React from "react";

const Layout: React.FC = ({ children }) => {
  return <main className="w-full h-full overflow-scroll">{children}</main>;
};

export default Layout;
