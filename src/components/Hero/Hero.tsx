import "./Hero.css";
import profileImage from "../../assets/XoBett.jpeg";

export default function Hero() {
  return (
    <div id="hero">
      <div className="presentation-container">
        <div>
          <h1>Cesar Betancourt</h1>
          <h3 className="professions">
            <span datatype="full-stack">Full Stack Developer</span>
          </h3>
          <p>
            Turning ideas into responsive, reliable and scalable web
            applications.
          </p>
        </div>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Image of author and developer, XoBett" />
      </div>
    </div>
  );
}
