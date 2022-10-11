import React from "react";
import Image from "next/image";
import classnames from "classnames";
import NavMenu from "./NavMenu";
import { BaseProps } from "@/types";
import { FiMenu, FiX } from "react-icons/fi";

import * as PopoverPrimitive from '@radix-ui/react-popover';

interface FooterProps extends BaseProps { }

const optionsMenu = [
  {
    title: "Home",
    url: "#home"
  },
  {
    title: "Minha história",
    url: "#about"
  },
  {
    title: "Portfolio",
    url: "#portfolio"
  },
  {
    title: "Blog",
    url: "#blog"
  },
  {
    title: "Contacto",
    url: "#contact"
  }
]

export default function Header(props: FooterProps) {
  return (
    <header
      className={classnames(
        "flex items-center justify-between w-full h-24 bg-transparent px-3",
        props.className
      )}
    >

      {/*  <div className="absolute w-full h-full bg-black opacity-30 blur-lg" /> */}

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
          <span className="text-gray-600">Software Developer</span>
        </div>
      </div>

      <NavMenu className="uppercase text-brand-green">
        {optionsMenu.map((el) => (
          <NavMenu.Link key={el.title} className="hover:border-brand-green pb-2 hover:pb-1.5 hover:border-b-2" href={el?.url}>
            {el.title}
          </NavMenu.Link>
        ))}

        <NavMenu.Link
          href="#"
          className={classnames(
            "text-brand-green uppercase border-2 border-brand-green",
            "px-1.5 py-0.5 font-semibold",
            "hover:bg-brand-green hover:text-white"
          )}
        >
          contrate-me
        </NavMenu.Link>
      </NavMenu>

      <div className="relative inline-block text-left mx-4 sm:hidden">
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger asChild>
            <button>
              <FiMenu className="w-6 h-6 text-white" />
            </button>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content
            align="center"
            sideOffset={4}
            className={classnames(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg p-2 px-4 shadow-md md:w-56",
              "bg-white mx-4"
            )}
          >
            <PopoverPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />

            <PopoverPrimitive.Close
              className={classnames(
                "absolute top-2 right-4 inline-flex items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <FiX className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </PopoverPrimitive.Close>

            {/**Menu */}

            <ul className="mt-4 flex flex-col">
              {optionsMenu.map((el) => (
                <NavMenu.Link key={el.title} className="hover:border-brand-green pb-2 hover:pb-1.5 hover:border-b-2" href={el?.url}>
                  {el.title}
                </NavMenu.Link>
              ))}

            </ul>

          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
      </div>

    </header>
  );
}
