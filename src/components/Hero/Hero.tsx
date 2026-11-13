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
          <div className="btns-container"></div>
        </div>
      </div>
      <div className="profile-image-container"></div>
    </div>
  );
}
