import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Projcet";
import Skills from "@/components/home/Skills";
import Study from "@/components/home/Study";
import WorksType from "@/components/home/WorkType";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Skills />
      <Project />
      <WorksType />
      <Study />
      <Contact />
    </div>
  );
};

export default Homepage;
