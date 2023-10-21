import TechStackItem from "./TechStackItem";
import "../../App.css";

const TechStack = () => {
  return (
    <div className="tech-stack" id="tech-stack">
      <h2 className="heading">My Tech Stack</h2>
      <p className="sub-heading">
        Technologies I’ve been working with recently
      </p>
      <div className="tech-stack-icons">
       <TechStackItem></TechStackItem>
      </div>
    </div>
  );
};

export default TechStack;
