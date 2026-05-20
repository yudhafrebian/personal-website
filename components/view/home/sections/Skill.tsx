import SkillCard from "@/components/card/SkillCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";

const SkillSection = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-10 border-t px-4 py-20 sm:px-6 md:px-16 lg:px-36 2xl:px-64" id="skill">
      <div>
        <BlurFade inView direction="right" className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            <Highlighter action="highlight" color="#3b82f6">
              Skills
            </Highlighter>{" "}
            & Technologies
          </h2>
          <p>Tools and technologies I work with</p>
        </BlurFade>
      </div>
      <SkillCard />
    </section>
  );
};

export default SkillSection;
