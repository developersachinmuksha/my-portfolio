import "../../App.css";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <p className="sub-heading">Things I’ve built so far</p>
      <div className="project-cards">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default Project;
