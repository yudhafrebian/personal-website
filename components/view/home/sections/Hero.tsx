import FadeContent from "@/components/FadeContent";
import Galaxy from "@/components/Galaxy";
import GlassSurface from "@/components/GlassSurface";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import Link from "next/link";

const HeroSections = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      <div className="absolute inset-0">
        <LightRays count={12} speed={7} length="90vh"/>
      </div>

      <div className="h-full flex flex-col gap-6 items-center justify-center ">
        <BlurFade inView direction="up">
          <GlassSurface
            //   width={160}
            height={50}
            borderRadius={50}
            className="my-custom-class"
          >
            <p>Personal Website</p>
          </GlassSurface>
        </BlurFade>
        <div className="w-[55%] text-center">
          <BlurFade inView delay={0.25} direction="up">
            <h1 className="text-6xl font-bold ">
              Building digital experiences that matter
            </h1>
            {/* <p className="text-sm">A software engineer passionate about building seamless user interfaces and scalable web applications.</p> */}
          </BlurFade>
        </div>
        <BlurFade inView delay={0.25 * 2} direction="up">
          <div className="flex gap-4 mt-4">
            <Link href={"#"}>
            <Button size={"xl"} className="px-10">
              Get Started
            </Button>
            </Link>
            <Link href={"/#about"}>
            <Button size={"xl"} className="px-10" variant={"outline"}>
              Learn More
            </Button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default HeroSections;
