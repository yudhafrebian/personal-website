import GlassSurface from "@/components/GlassSurface";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import Link from "next/link";

const HeroSections = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <LightRays count={12} speed={7} length="90vh" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-4 pt-24 text-center sm:px-6">
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
        <div className="w-full max-w-4xl">
          <BlurFade inView delay={0.25} direction="up">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building digital experiences that matter
            </h1>
            {/* <p className="text-sm">A software engineer passionate about building seamless user interfaces and scalable web applications.</p> */}
          </BlurFade>
        </div>
        <BlurFade inView delay={0.25 * 2} direction="up">
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href={"#"}>
              <Button size={"xl"} className="w-full px-10 sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href={"/#about"}>
              <Button size={"xl"} className="w-full px-10 sm:w-auto" variant={"outline"}>
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
