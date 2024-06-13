"use client"; // Utilisation de l'annotation pour le client
import { cn } from "../../lib/utils"; // Importation de la fonction `cn` depuis utils
import { AnimatePresence, motion } from "framer-motion"; // Importation des modules d'animation de framer-motion
import { useState } from "react"; // Importation du hook useState de React
import Popup from "./Popup"; // Importation du composant Popup
import { popupItems } from "../../data/data"; // Importation des données

// Interface pour les props de HoverEffect
interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}

// Composant HoverEffect
export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // État pour l'index survolé
  const [popupItem, setPopupItem] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null); // État pour l'élément du popup

  // Gestion du clic sur un élément
  const handleItemClick = (link: string) => {
    const item = popupItems.find((popupItem) => popupItem.link === link);
    if (item) {
      setPopupItem(item);
    }
  };

  // Fermeture du popup
  const closePopup = () => {
    setPopupItem(null);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleItemClick(item.link)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-orange-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
      {popupItem && (
        <Popup
          image={popupItem.image}
          title={popupItem.title}
          description={popupItem.description}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

// Composant Card
export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-green-300 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Composant CardTitle
export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h4
      className={cn("text-white text-2xl font-bold tracking-wide ", className)}
    >
      {children}
    </h4>
  );
};

// Composant CardDescription
export const CardDescription: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
