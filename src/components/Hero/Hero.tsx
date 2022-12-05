import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
import Illustration from "../../assets/illustration.svg";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={1}>
          <p>Hello 👋,I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Praveenmuthukumar Gnanaraj</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="small-resume" style={{ minHeight: "50px" }}>
            <HeroDescription />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink
              smooth
              to="#contact"
              className="button"
              style={{ display: "flex", width: "fit-content" }}
            >
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

const HeroDescription = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2500)
          .typeString(
            "Engineer with background working productively in dynamic environments"
          )
          .pauseFor(300)
          .changeDeleteSpeed(1)
          .deleteAll()
          .typeString(` <strong>Engineer</strong> `)
          .changeDelay(1)
          .typeString("with background ")
          .pasteString(" working productively in dynamic environments", null)
          .changeDelay("natural")
          .typeString(" & focused on achieving project objectives with")
          .changeDelay(1)
          .typeString(" speed ")
          .changeDelay("natural")
          .typeString(" and accuracy.")
          .pauseFor(1000)
          .start();
      }}
    />
  );
};
