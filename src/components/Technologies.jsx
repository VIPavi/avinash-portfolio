import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1 whileInView={{opacity : 1, y : 0}} initial={{opacity : 0, y : -100}} transition={{duration : 1.5}} className="my-16 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 pb-12"
      >
        <motion.div
          variants={iconVariation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="reactjs"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="nextjs"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        {/* variants={iconVariation(5)} initial="initial" animate="animate" */}
        <motion.div
          variants={iconVariation(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="bootstrap"
        >
          <SiBootstrap className="text-5xl text-fuchsia-500" />
        </motion.div>
        {/* variants={iconVariation(2)} initial="initial" animate="animate" */}
        <motion.div
          variants={iconVariation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="javascript"
        >
          <DiJavascript1 className="text-5xl text-amber-200" />
        </motion.div>
        {/* variants={iconVariation(4)} initial="initial" animate="animate" */}
        <motion.div
          variants={iconVariation(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="jquery"
        >
          <SiJquery className="text-5xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};
