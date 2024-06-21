"use client"
import React, { useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="flex flex-col text-center md:text-start items-center border-2 border-green-300 bg-orange-50 rounded-xl w-full max-w-3xl max-h-full overflow-y-auto shadow-lg relative p-8"
      >
        <RxCross1
          onClick={handleClose}
          className="absolute text-2xl top-2 right-2  cursor-pointer"
        />
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 ">
          <Image
            src="/profile-pic.png"
            alt="photo de profil"
            width={200}
            height={200}
            className="mx-auto"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Bienvenue sur mon{" "}
              <span className="font-bold italic hover:text-red-500">
                portfolio
              </span>{" "}
              !
            </h2>
            <p className="text-xl md:text-3xl font-semibold mb-2">
              Moi, c'est{" "}
              <span className="font-bold italic hover:text-green-500">
                Tony
              </span>
            </p>
          </div>
        </div>

        <div className=" my-0 md:my-8">
          <div className="flex justify-center items-center my-2">
            <Image
              src="/frenchflag.png"
              alt="drapeau français"
              width={40}
              height={20}
              className=""
            />
            <p className="text-lg md:text-xl font-semibold md: ml-6">
              Développeur Full Stack et Chef de Projet Cybersécurité & Tech, basé à Paris, souvent en voyage à Madagascar.
            </p>
            <Image
              src="/malagasyflag.png"
              alt="drapeau malagasy"
              width={40}
              height={20}
              className=""
            />
          </div>

          <p className="text-lg md:text-xl font-semibold mb-4">
            Passionné par les technologies web, je possède une expertise variée couvrant le développement frontend et backend, ainsi que le DevOps et la gestion de projet. Voici un aperçu de ce que je peux vous offrir :
          </p>

          <ul className="list-disc list-inside text-left text-lg md:text-xl font-semibold mb-4">
            <li>Développement Frontend avec React, Next.js, et TailwindCSS.</li>
            <li>Création de sites web et d'applications mobiles avec Flutterflow.</li>
            <li>Développement Backend et intégration d'API, notamment avec OpenAI.</li>
            <li>Implémentation de solutions e-commerce avec Shopify et WordPress.</li>
            <li>Automatisation et développement de bots sur Discord avec Python.</li>
            <li>Gestion de la sécurité et de l'infrastructure cloud.</li>
            <li>Création de contenu et design graphique avec Canva.</li>
            <li>Gestion de projet avec une approche centrée sur l'efficacité et la satisfaction du client.</li>
          </ul>

          <p className="text-lg md:text-xl font-semibold mb-4">
            Vous cherchez un développeur web polyvalent pour renforcer votre présence en ligne ou alors un chef de projet IT pour manager votre équipe et trouver des clients à l'internationale ? N'hésitez pas à me contacter ! Je suis impatient de contribuer à la réussite de votre projet !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
