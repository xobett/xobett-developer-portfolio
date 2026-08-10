import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <div className="project-selection-container">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Web Development</a>
          </li>
          <li>
            <a href="#">Game Development</a>
          </li>
        </ul>
      </div>
      <div className="projects-container"></div>
    </div>
  );
}
