import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Container } from "./styles";

import Resume from "../../assets/Praveen_G Resume.pdf";
import { Theme, ThemeContext } from "../../theme-context";
import { useClock } from "../../Time";
import ScrollAnimation from "react-animate-on-scroll";

export function Header() {
  const [isActive, setActive] = useState(false);
  const { setTheme } = React.useContext(ThemeContext);
  const date = useClock();

  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setTheme((prevTheme: Theme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Praveen</span>
          <span>G</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#work" onClick={closeMenu}>
            My Work's
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
          <ScrollAnimation
            animateIn="bounce"
            delay={2000}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div>
              <p style={{ position: "absolute", bottom: 28 }}>
                {date.toLocaleTimeString()}
              </p>
            </div>
          </ScrollAnimation>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "close menu" : "open menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        />
      </Router>
    </Container>
  );
}
