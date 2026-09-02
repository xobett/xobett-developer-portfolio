import { useState } from "react";
import "./Projects.css";

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
            <li className="project">
              <div className="img-container">
                <img
                  src="/projects/web/tic-tac-toe.png"
                  alt="Image of Tic Tac Toe project"
                />
              </div>
              <div className="description">
                <h2>Project title</h2>
                <p>Description</p>
                <p>Tools</p>
              </div>
            </li>
            <li className="project">
              <div className="img-container">
                <img
                  src="/projects/web/tic-tac-toe.png"
                  alt="Image of Tic Tac Toe project"
                />
              </div>
              <div className="description">
                <h2>Project title</h2>
                <p>Description</p>
                <p>Tools</p>
              </div>
            </li>
            <li className="project">
              <div className="img-container">
                <img
                  src="/projects/web/tic-tac-toe.png"
                  alt="Image of Tic Tac Toe project"
                />
              </div>
              <div className="description">
                <h2>Project title</h2>
                <p>Description</p>
                <p>Tools</p>
              </div>
            </li>
            <li className="project">
              <div className="img-container">
                <img
                  src="/projects/web/tic-tac-toe.png"
                  alt="Image of Tic Tac Toe project"
                />
              </div>
              <div className="description">
                <h2>Tic Tac Toe</h2>
                <p>Description</p>
                <p>Tools</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
