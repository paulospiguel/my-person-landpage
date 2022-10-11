import { BaseProps, AnchorBaseProps } from "@/types";
import React from "react";
import tw, { styled } from "twin.macro";

interface NavMenuProps extends BaseProps { }

const Nav = tw.nav`
  gap-5 items-center font-IndieFlores hidden sm:flex
`;

const ItemLink = styled.a`
  ${tw``}
`;

function NavMenu({ children, ...props }: NavMenuProps) {
  return <Nav {...props}>{children}</Nav>;
}

type LinkMenuProps = {} & AnchorBaseProps;

const LinkMenu: React.FC<LinkMenuProps> = ({ children, href, ...props }) => {
  return (
    <ItemLink href={href} {...props}>
      {children}
    </ItemLink>
  );
};

NavMenu.Link = LinkMenu;

export default NavMenu;
