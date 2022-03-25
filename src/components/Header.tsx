import React from "react";
import Image from "next/image";

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
      <nav className="flex gap-2">
        <a href="#" className="text-gray-600">
          Minha História
        </a>

        <a href="#" className="text-gray-600">
          Minha carreira
        </a>
      </nav>
    </header>
  );
}
