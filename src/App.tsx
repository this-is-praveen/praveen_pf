import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
