import React from "react";
import Image from "next/image";
import classnames from "classnames";
import NavMenu from "./NavMenu";
import { BaseProps } from "@/types";

interface FooterProps extends BaseProps {}


const optionsMenu = [
  {
    title: "home",
    url: "#"
  },
  {
    title: "minha história",
    url: "#"
  },
  {
    title: "minha carreira",
    url: "#"
  },
  {
    title: "blog",
    url: "#"
  },
  {
    title: "Contacto",
    url: "#"
  }
]

export default function Header(props: FooterProps) {
  return (
    <header
      className={classnames(
        "flex items-center justify-between w-full h-24 px-3 bg-transparent",
        props.className
      )}
    >
      <div className="flex items-center space-x-2">
        <Image
          width="50px"
          height="50px"
          className="rounded-full"
          src="/assets/avatarProfile_BW.webp"
          alt="Homem branco, soridente, de meia idade, de aproximadamente 36 anos, 
          cabelos curtos, crespo e escuros, olhos castanhos de barbas escuras de tamanho média, 
          vestindo um t-shert azul."
        />
        <div className="flex flex-col">
          <span className="font-extrabold text-gray-800 uppercase">
            Paulo Spiguel
          </span>
          <span className="text-gray-600">Software Engineer</span>
        </div>
      </div>

      <NavMenu className="text-brand-green uppercase">
        {optionsMenu.map((el) => (
          <NavMenu.Link key={el.title} className="hover:border-brand-green pb-2 hover:pb-1.5 hover:border-b-2" href={el?.url}>
            {el.title}
          </NavMenu.Link>
        ))}

        <a
          href="#"
          className={classnames(
            "text-brand-green uppercase border-2 border-brand-green",
            "px-1.5 py-0.5 font-semibold",
            "hover:bg-brand-green hover:text-white"
          )}
        >
          contrate-me
        </a>
      </NavMenu>
    </header>
  );
}
