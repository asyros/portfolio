import { Navbar, About, Experience, Projects, Contact } from "./components";
import data from "./data";

export default function Page() {
  const { aboutData, contactData, navbarData, projectsData, experienceData } =
    data;

  return (
    <main>
      <Navbar links={navbarData} />
      <About data={aboutData} />
      <Experience data={experienceData} />
      <Projects data={projectsData} />
      <Contact data={contactData} />
    </main>
  );
}
