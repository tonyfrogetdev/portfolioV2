import React from "react";
import { HoverEffect } from "./ui/HoverEffectCard";
import { items, typewordseffect } from "@/data/data";

const Informations: React.FC = () => {
  return (
    <div className="flex flex-col max-w-7xl">
      <h2 className=" text-black text-2xl md:text-4xl font-bold dark:text-white text-center my-4 lg:mt-12 z-30 ">
        Je maîtrise et travaille avec ces technologies dans mon quotidien
      </h2>
      <HoverEffect items={items} />
    </div>
  );
};

export default Informations;
