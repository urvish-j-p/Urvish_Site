import { HERO } from "../constants";
import urvishImg from "../assets/urvish-pic.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="flex min-h-screen flex-wrap items-center" id="intro">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl text-center md:text-left">
            {HERO.greet}
          </p>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl mt-4 text-center md:text-left">
            {HERO.Intro}
          </p>
          <h2 className="mb-4 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem] text-center md:text-left">
            {HERO.name}
          </h2>
          <div className="w-full flex justify-center">
            <p className="mb-8 p-2 text-xl text-center md:text-left">
              {HERO.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={urvishImg}
              alt="Urvish Pic"
              width={550}
              height={550}
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
