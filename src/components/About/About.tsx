import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import cssIcon from "../../assets/css-icon.svg";
import gqlIcon from "../../assets/graphql-logo-2.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongoIcon from "../../assets/mongodb-icon-1.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import PortFolioFoto from "../../assets/Portfolio_Foto.png";

export const About = () => {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Howdy, I computer science building with great passion for
            programming. I am enthusiastic about conveying arrangement and
            simultaneously challenge me. Made strides in my skills as a
            Front-End and Back-End designer
          </p>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            I am a devoted individual who seeks after my dreams, dedicated and
            results-oriented, I continuously look to realize my best adaptation.
          </p>
        </ScrollAnimation>

        <br />
        <br />

        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>Skills:</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="shake" delay={1000} initiallyVisible={true}>
          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={htmlIcon} alt="Html" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={cssIcon} alt="Css" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                <img src={nodeIcon} alt="Node" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <img src={gqlIcon} alt="Graph QL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
                <img src={mysqlIcon} alt="MySQL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
                <img src={mongoIcon} alt="Mongo DB" />
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          offset={50}
          delay={0.5 * 1000}
        >
          <div className="about-image-background">
            <img src={PortFolioFoto} alt={"About section"} />
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
};
