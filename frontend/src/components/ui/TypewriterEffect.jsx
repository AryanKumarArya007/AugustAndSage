import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  return (
    <div
      className={cn(
        "bg-white py-12 px-4 text-center text-black text-xl sm:text-2xl md:text-4xl font-playfair",
        className
      )}
    >
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block mr-2">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn("opacity-0 hidden", word.className)}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block align-bottom ml-1 w-[4px] h-5 md:h-7 bg-gray-600",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
