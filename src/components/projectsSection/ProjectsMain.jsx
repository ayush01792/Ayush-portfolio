import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Crypto Tutor",
    year: "2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg", // Make sure to add this image in public/images/
    link: "https://github.com/ayush01792/crypto-tutor",
  },
  {
    name: "Social Media Simulator in C++",
    year: "2023",
    align: "left",
    image: "../../public/images/website-img-4.jpg", // Add a corresponding image
    link: "https://github.com/ayush01792/Social-media-simulator-using-c-",
  },
  {
    name: "My Portfolio",
    year: "2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg", // Add this image to public/images/
    link: "https://github.com/ayush01792/Ayush-portfolio",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
