import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <header className="w-full ">
      <div className="flex items-center space-x-2">
        <Image
          width="60px"
          height="60px"
          className="rounded-full"
          src="/assets/avatarProfile_BW.webp"
          alt="Homem branco, soridente, de meia idade, de aproximadamente 36 anos, 
          cabelos curtos, crespo e escuros, olhos castanhos de barbas escuras de tamanho média, 
          vestindo um t-shert azul."
        />
        <div className="flex flex-col">
          <span className="uppercase font-extrabold text-gray-800">Paulo Spiguel</span>
          <span className="text-gray-600">Software Engineer</span>
        </div>
      </div>
      <nav></nav>
    </header>
  );
}
