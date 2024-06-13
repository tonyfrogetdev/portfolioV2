"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Typing the words array explicitly
  let wordsArray: string[] = words.split(" ");

  let splitWordsArray: string[] = [];
  wordsArray.forEach((word) => {
    if (word.includes("?")) {
      const parts = word.split("?");
      splitWordsArray.push(parts[0] + "?");
      if (parts[1]) splitWordsArray.push(parts[1]);
    } else {
      splitWordsArray.push(word);
    }
  });

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.1),
      }
    );
  }, [scope, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {splitWordsArray.map((word: string, idx: number) => {
          let colorClass = "dark:text-white text-black";
          if (idx === 1) {
            colorClass = "text-red-400";
          } else if (idx === 13) {
            colorClass = "text-green-400";
          }

          return (
            <span key={word + idx}>
              <motion.span
                className={`text-4xl md:text-5xl lg:text-6xl ${colorClass} opacity-0`}
              >
                {word}{" "}
              </motion.span>
              {word.includes("?") && <br key={"br-" + idx} />}
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
