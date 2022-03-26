import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";
import tw from "twin.macro";

const MenuItem = tw.div`
flex justify-center text-gray-300
`;

export default function Footer() {
  return (
    <footer className="mt-auto h-80 bg-slate-800 w-full pt-5 flex items-center flex-col justify-between gap-3">
      <div className="">
        <Image layout="responsive" sizes="100vw" className="h-full w-full" src="/assets/background-techs.png" alt="Imagem com várias tecnologias" />
      </div>
      <div className="grid grid-cols-3 w-full flex-1">
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </div>
      <form className="space-y-1">
        <p className="text-slate-200 uppercase font-DeltaGO">Escreva-se a minha Newslatter</p>
        <div className="flex items-center h-8">
          <input type="text" placeholder="Seu e-mail" className="h-full px-1 flex-1" />
          <button className="h-full bg-slate-300 p-2 flex items-center justify-center">
            <FiSend className="h-5 w-5 text-slate-800" />
          </button>
        </div>
      </form>
      <div className="text-gray-300 my-2">
        2022 - Paulo Spiguel© | Todos os Direitos Reservados
      </div>
    </footer>
  );
}
