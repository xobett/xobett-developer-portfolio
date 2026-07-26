import "./Hero.css";
import profileImage from "../../assets/XoBett.jpeg";

export default function Hero() {
  return (
    <div id="hero">
      <div className="presentation-container">
        <div className="container">
          <div>
            <h1>Cesar Betancourt</h1>
            <h3 className="professions">
              <span datatype="full-stack">Full Stack Developer</span>
            </h3>
          </div>

          <p>
            Experienced in building scalable, reliable, responsive and
            high-quality web applications
          </p>
          <div className="btns-container">
            <button className="btn">Go to projects</button>
            <button className="btn">Download CV</button>
          </div>
        </div>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Image of author and developer, XoBett" />
      </div>
    </div>
  );
}
