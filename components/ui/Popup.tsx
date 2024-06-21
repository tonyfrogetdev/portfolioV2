import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PopupProps {
  title: string;
  description: string;
  image: string;
  link: string; // Ajout du lien dans les props
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  description,
  image,
  link,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-64 mb-4">
            <Image
              alt="image popup"
              src={image}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <button
          className="bg-green-300 text-white px-4 py-2 rounded font-bold"
          onClick={onClose}
        >
          Fermer la fenêtre
        </button>
      </motion.div>
    </div>
  );
};

export default Popup;
