import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <div className="project-selection-container">
        <ul>
          <li>
            <a className="active" href="#">
              All
            </a>
          </li>
          <li>
            <a className="" href="#">
              Web
            </a>
          </li>
          <li>
            <a className="" href="#">
              Game
            </a>
          </li>
        </ul>
      </div>
      <div className="projects-container">
        <div className="background">
          <div className="grid-container">
            <div className="project">First</div>
            <div className="project">Second</div>
            <div className="project">Third</div>
            <div className="project">Fourth</div>
          </div>
        </div>
      </div>
    </div>
  );
}
