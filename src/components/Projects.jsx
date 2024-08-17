import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleTouchStart = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleTouchOutside = (event) => {
    // Check if the touch event target is outside the project cards
    if (!event.target.closest(".project-card")) {
      setHoveredProject(null);
    }
  };

  useEffect(() => {
    // Add event listener for touch events on the entire document
    document.addEventListener("touchstart", handleTouchOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, []);

  return (
    <>
      <section className="pt-20" id="projects">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-3xl lg:text-4xl"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              key={project.id}
              onTouchStart={() => handleTouchStart(project.id)}
              className="group relative overflow-hidden rounded-3xl project-card"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg translate-opacity duration-500 group-hover:opacity-100"
              >
                <h3 className="mb-2 text-2xl text-black">{project.name}</h3>
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2  mt-4 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>View Live</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
