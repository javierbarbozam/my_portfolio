import { Biography } from "./about/biography";
import { Frontend } from "./about/frontend";

const About = () => {
  return (
    <div className="about-container">
      <Biography />
      <Frontend />
    </div>
  );
};

export { About };
