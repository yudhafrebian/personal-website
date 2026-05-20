import ExperienceCard from "@/components/card/ExperienceCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import * as React from "react";

const ExperienceSections: React.FunctionComponent = () => {
  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 md:px-16 lg:px-36 2xl:px-64" id="experience">
      <div className="flex min-h-[calc(100vh-10rem)] flex-col justify-center gap-10">
        <BlurFade inView direction="right" className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
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
