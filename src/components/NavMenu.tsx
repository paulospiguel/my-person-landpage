import { BaseProps, AnchorBaseProps } from "@/types";
import React from "react";
import tw, { styled } from "twin.macro";

interface NavMenuProps extends BaseProps {}

const Nav = tw.nav`
flex gap-5 items-center font-IndieFlores
`;

const ItemLink = styled.a`
  ${tw`border-b-2 hover:(text-black border-indigo-500)`}
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
