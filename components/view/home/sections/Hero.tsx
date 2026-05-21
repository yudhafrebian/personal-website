import GlassSurface from "@/components/GlassSurface";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import Link from "next/link";

const HeroSections = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <LightRays count={6} speed={10} length="90vh" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-4 pt-24 text-center sm:px-6">
        <GlassSurface
          height={50}
          borderRadius={50}
          className="my-custom-class"
        >
          <p>Personal Website</p>
        </GlassSurface>
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Ananda Yudha Frebiansyah, Fullstack Developer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Building scalable web applications, responsive interfaces, and
            efficient digital products with Next.js, React, TypeScript, and
            Node.js.
          </p>
        </div>
        <div className="mt-4 flex gap-3 sm:gap-4">
          <Link href={"#contact"}>
            <Button size={"xl"} className="w-full px-10 sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href={"/#about"}>
            <Button
              size={"xl"}
              className="w-full px-10 sm:w-auto"
              variant={"outline"}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
