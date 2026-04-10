import FeaturedProjectCards from "@/components/card/ProjectCard";
import { Highlighter } from "@/components/ui/highlighter";
import * as React from "react";

interface IFeaturedProjectsSectionProps {}

const FeaturedProjectsSection: React.FunctionComponent<
  IFeaturedProjectsSectionProps
> = (props) => {
  return (
    <section className="px-36 py-20 h-screen">
      <h2 className="text-5xl font-semibold">
        Featured{" "}
        <Highlighter action="underline">
          Projects
        </Highlighter>
      </h2>
      <p>A curated collection of my best fullstack and modern web projects</p>
      <FeaturedProjectCards />
    </section>
  );
};

export default FeaturedProjectsSection;
