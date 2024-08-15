import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="my-10"
          >
            Urvish Prajapati
          </motion.p>
        </div>
        <div className="flex items-center justify-center gap-8">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 * index }}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
