import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Footer from "./components/footer";
import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Theme appearance={theme}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar theme={theme} setTheme={setTheme} />
            {/* <Container size="4">
          <Hero />
          <Skills />
          <Projects />
          <ContactMe />
          </Container> */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Hero />}/>
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
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
