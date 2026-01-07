import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Projcet";
import Skills from "@/components/home/Skills";
import Study from "@/components/home/Study";
import WorksType from "@/components/home/WorkType";
import { getBlog } from "@/services/blog";
import { getProjcet } from "@/services/projcet";
import { getTechnology } from "@/services/technology";

const Homepage = async () => {
  const blog = await getBlog();
  const projects = await getProjcet();
  const technology = await getTechnology();

  return (
    <div className="overflow-x-hidden">
      <div id="home">
        <Hero />
      </div>
      <div id="skill">
        <Skills technology={technology.result} />
      </div>
      <div id="projects">
        <Project projects={projects.result} />
      </div>
      <div id="work">
        <WorksType />
      </div>
      <div id="experience">
        <Study />
      </div>
      <Blog blog={blog.result} />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
