import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { ThemeContext } from "./theme-context";

function App() {
  type Theme = "light" | "dark";
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
