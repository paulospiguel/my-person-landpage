import React from "react";

interface LayoutPros {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutPros) => {
  return <main className="w-full h-full overflow-scroll">{children}</main>;
};

export default Layout;
