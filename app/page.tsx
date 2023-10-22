import Navbar from "./components/navbar/navbar";
import Experience from "./experience";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Projects from "./pages/projects/page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
