import SkillCard from "@/components/card/SkillCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";

const SkillSection = () => {
  return (
    <section className="py-10 px-4 md:py-20 md:px-36 2xl:px-64 2xl:py-20 h-screen border-t flex flex-col justify-center gap-10" id="skill">
      <div className="mb-10">
        <BlurFade inView direction="right" className="flex flex-col gap-2">
          <h2 className="text-5xl font-semibold">
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
