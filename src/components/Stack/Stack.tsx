import { useState } from "react";
import "./Stack.css";
import * as Icons from "../Icons/Icons.tsx";

export default function Stack() {
  const [activeStack, setActiveStack] = useState<string>("languages");
  const stackButtons = [
    { stack: "languages", label: "Languages", backgroundColor: "deep-pink" },
    { stack: "frontend", label: "Frontend", backgroundColor: "banana-cream" },
    {
      stack: "backend-databases",
      label: "Backend & Databases",
      backgroundColor: "deep-sky-blue",
    },
    { stack: "tools", label: "Tools", backgroundColor: "soft-periwinkle" },
  ];

  const languageStack = [
    { language: "C#", icon: Icons.CSharpIcon },
    { language: "TypeScript", icon: Icons.TypeScriptIcon },
    { language: "JavaScript", icon: Icons.JavaScriptIcon },
    { language: "PHP", icon: Icons.PhpIcon },
  ];
  const frontendStack = [
    { framework: "React.js", icon: Icons.ReactJsIcon },
    { framework: "Next.js", icon: Icons.NextJsIcon },
    { framework: "Bootstrap", icon: Icons.Bootstrap },
    { framework: "Tailwind CSS", icon: Icons.TailwindCSSIcon },
  ];
  const backendStack = [
    { framework: "Laravel", icon: Icons.LaravelIcon },
    { framework: "ASP.NET Core", icon: Icons.ASPNetCoreIcon },
    { framework: "MySQL", icon: Icons.MySQLIcon },
  ];
  const toolsStack = [
    { tool: "Docker", icon: Icons.DockerIcon },
    { tool: "Git / GitHub", icon: Icons.GitGitHubIcon },
    { tool: "Jest", icon: Icons.JestIcon },
    { tool: "Linux", icon: Icons.LinuxIcon },
  ];

  const isActive = (term: string) => activeStack === term;

  return (
    <div id="stack">
      <div className="about-me-container">
        <h2>About me</h2>
        <p>
          Software developer with professional experience building internal
          business applications, automating approval workflows, and modernizing
          operational processes. Additional experience building gameplay systems
          using Unity, with a strong focus on clean architecture and
          maintainable software design.
        </p>
      </div>
      <div className="tech-stack-container">
        <h2>Tech Stack</h2>
        <div className="stack-container">
          <ul className={`stack-list ${isActive("languages") ? "active" : ""}`}>
            {[...languageStack, ...languageStack].map((lg, index) => (
              <li key={index}>
                {<lg.icon />}
                <span>{lg.language}</span>
              </li>
            ))}
          </ul>
          <ul className={`stack-list ${isActive("frontend") ? "active" : ""}`}>
            {[...frontendStack, ...frontendStack].map((fw, index) => (
              <li key={index}>
                {<fw.icon />}
                <span>{fw.framework}</span>
              </li>
            ))}
          </ul>
          <ul
            className={`stack-list ${isActive("backend-databases") ? "active" : ""}`}
          >
            {[...backendStack, ...backendStack].map((fw, index) => (
              <li key={index}>
                {<fw.icon />}
                <span>{fw.framework}</span>
              </li>
            ))}
          </ul>
          <ul className={`stack-list ${isActive("tools") ? "active" : ""}`}>
            {[...toolsStack, ...toolsStack].map((t, index) => (
              <li key={index}>
                {<t.icon />}
                <span>{t.tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="tech-btns-container">
          {stackButtons.map((st) => (
            <button
              key={st.stack}
              className={`btn ${isActive(st.stack) ? "active" : ""}`}
              onClick={() => setActiveStack(st.stack)}
              data-bckg-clr={st.backgroundColor}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
