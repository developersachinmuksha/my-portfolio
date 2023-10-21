import "../../App.css";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card-img-area">
        <img className="project-card-img" src="projects/p3.png" />
      </div>
      <div className="project-card-content-area">
        <h3 className="project-card-title">Fantasy King</h3>
        <p className="project-card-desciprtion">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content.
        </p>
        <p className="project-card-tech-stack-area">
          <span className="project-card-tech-stack">Tech stack:</span> HTML,
          JavaScript, SASS, React
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
