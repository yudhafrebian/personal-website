import FeaturedProjectCards from "@/components/card/ProjectCard";
import { Highlighter } from "@/components/ui/highlighter";

const FeaturedProjectsSection = () => {
  return (
    <section className="px-4 py-20 md:px-10 xl:px-16" id="project">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Featured <Highlighter action="underline">Projects</Highlighter>
        </h2>
        <p>A curated collection of my best fullstack and modern web projects</p>
        <FeaturedProjectCards />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
