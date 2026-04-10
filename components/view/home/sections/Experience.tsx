import ExperienceCard from "@/components/card/ExperienceCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import * as React from "react";
interface IExperienceSectionsProps {}

const ExperienceSections: React.FunctionComponent<IExperienceSectionsProps> = (
  props,
) => {
  return (
    <section className="px-36 py-20 h-screen" id="experience">
      <div className="flex flex-col justify-between h-full">
        <BlurFade inView direction="right" className="flex flex-col gap-2">
          <h2 className="text-5xl font-semibold">
            Work <Highlighter action="underline">Experience</Highlighter>
          </h2>
          <p>My Journey in the World of Software Development</p>
        </BlurFade>
        <ExperienceCard />
      </div>
    </section>
  );
};

export default ExperienceSections;
