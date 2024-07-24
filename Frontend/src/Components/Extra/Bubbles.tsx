import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface IPROPS {
  yStart: number;
  yEnd: number;
}
const Bubbles: React.FC<IPROPS> = ({ yStart, yEnd }) => {
  return (
    
      <div className="absolute flex justify-between w-screen h-screen -z-10 overflow-hidden">
        {[...Array(20)].map((_, indx) => {
          return (
            <div
              key={indx}
              className={twMerge(
                " flex items-center justify-between",
                indx & 1 ? "flex-row-reverse" : "flex-row"
              )}
            >
              <motion.span
                key={indx}
                className="shadow-bubble-blue bg-blue-400 h-2 aspect-square rounded-full -z-30 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1,
                  transition: {
                    repeat: Infinity,
                    ease:"linear",
                    repeatType: "loop",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 10
                        : Math.random() * 10 + 20,
                  },
                }}
              ></motion.span>
              <motion.span
                key={indx+40}
                className="shadow-bubble-pink bg-rose-500 h-2 aspect-square rounded-full -z-30 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease:"linear",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 20
                        : Math.random() * 10 + 10,
                  },
                }}
              ></motion.span>
               <motion.span
                key={indx+80}
                className="shadow-bubble-pink bg-yellow-300 h-2 aspect-square rounded-full -z-30 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease:"linear",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 20
                        : Math.random() * 10 + 10,
                  },
                }}
              ></motion.span>
            </div>
          );
        })}
      </div>
    
  );
};

export default Bubbles;
