import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerationEffect";
import Button from "./ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-10 lg:pb-0 pt-20 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-orange-50 dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center ">
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="Tony FROGET"
            />
          </div>

          <TextGenerateEffect
            className="text-center"
            words="Des problèmes digitaux à régler ? Je suis là pour vous apporter des solutions"
          />

          <p className="text-center text-sm md:text-lg lg:text-2xl my-4">
            Développeur Web FullStack | Chef de projet CyberSécurité & Cloud
          </p>

          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
