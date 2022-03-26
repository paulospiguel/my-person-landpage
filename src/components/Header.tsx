import React from "react";
import Image from "next/image";
import classnames from "classnames";
import NavMenu from "./NavMenu";

export default function Footer() {
  return (
    <header className="flex items-center justify-between w-full h-24 px-3 bg-transparent">
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
      <NavMenu>
        <NavMenu.Link className="uppercase" href="#">
          Home
        </NavMenu.Link>

        <NavMenu.Link className="uppercase" href="#">
          Minha História
        </NavMenu.Link>

        <NavMenu.Link className="uppercase" href="#">
          Minha Carreira
        </NavMenu.Link>

        <NavMenu.Link className="uppercase" href="#">
          Blog
        </NavMenu.Link>

        <NavMenu.Link className="uppercase" href="#">
          Contacto
        </NavMenu.Link>

        <a
          href="#"
          className={classnames(
            "text-slate-800 uppercase border-2 border-slate-800",
            "px-1.5 py-0.5 font-semibold",
            "hover:bg-slate-800 hover:text-white"
          )}
        >
          contrate-me
        </a>
      </NavMenu>
    </header>
  );
}
