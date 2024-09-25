import { Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Theme appearance={theme}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<ContactMe />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
