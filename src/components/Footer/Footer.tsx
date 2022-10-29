import { Container } from "./styles";

import FacebookIcon from "../../assets/facebook.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import reactIcon from "../../assets/react-icon.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>G</span>
        <span style={{ paddingLeft: "0.25rem" }}>Praveen</span>
      </a>
      <div>
        <p>
          This site was made with a
          <img src={reactIcon} alt="React" /> with
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/praveenmuthukumar-gnanaraj-bb487b189/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/this-is-praveen" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="https://www.instagram.com/g_praveen_here/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100014306237145" target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
      </div>
    </Container>
  );
}
