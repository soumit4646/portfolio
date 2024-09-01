import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <>
      <Theme appearance={theme}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Container size="4">
          <Hero />
          <Skills />
          <Projects />
          <ContactMe />
        </Container>
        <Footer />
      </Theme>
    </>
  );
}

export default App;
