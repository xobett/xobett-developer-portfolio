import { useState } from "react";
import "./Projects.css";
import { Project } from "../Project/Project";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = [{ label: "All" }, { label: "Web" }, { label: "Game" }];
  const isActive = (term: string) => activeCategory === term;
  return (
    <div id="projects">
      <div className="project-selection-container">
        <ul>
          {categories.map((c, index) => (
            <li
              key={index}
              className={`${isActive(c.label) ? "active" : ""}`}
              onClick={() => setActiveCategory(c.label)}
            >
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-container">
        <div className="background">
          <ul className="grid-container">
            <Project
              imgUrl="/projects/web/to-do-app.png"
              imgAlt="To do web app project image"
              title="To Do App"
              description="To do App with local storage for data persistance."
              tools={[]}
            />
            <Project
              imgUrl="/projects/web/weather-api.png"
              imgAlt="Weather API project image"
              title="Weather API"
              description="Weather API to fetch weather conditions with both Celsius and Farenheit conversion."
              tools={[]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
