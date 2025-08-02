import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Ayush Raj, a final-year Computer Science student at NIT Jalandhar with a strong passion for web development and technology. I specialize in React and front-end development, and I love building real-world projects that solve practical problems. I'm deeply committed to continuous learning and enjoy sharing knowledge with peers through collaborative coding and open-source contributions. Beyond academics, I actively explore the latest trends in tech, aiming to grow as a developer and contribute meaningfully to the tech community.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
