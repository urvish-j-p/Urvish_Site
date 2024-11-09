import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <section className="pt-20" id="experience">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-semibold tracking-tighter mb-8"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8}}
          className="space-y-8 p-3"
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
            >
              <h3 className="text-2xl font-semibold mb-3">{experience.title}</h3>
              <p className="text-xl">{experience.company}</p>
              <p className="text-sm text-stone-300">{experience.duration}</p>
              <p className="mt-3 text-base">{experience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Experience;
