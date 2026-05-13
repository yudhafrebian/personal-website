import GlassSurface from "@/components/GlassSurface";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { WordRotate } from "@/components/ui/word-rotate";
import { Download, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface IAboutProps {}

const AboutSections: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <section
      className="flex justify-between items-center py-10 px-4 md:py-20 md:px-36 2xl:px-64 2xl:py-20 h-screen"
      id="about"
    >
      <BlurFade inView direction="right" className="w-2/3 flex flex-col gap-6">
        <div>
          <h2 className="text-5xl font-semibold">
            <Highlighter action="underline">Hi, I'm</Highlighter>
          </h2>
          <WordRotate
            className="text-5xl font-bold"
            words={[
              "Ananda Yudha Frebiansyah",
              "A Fullstack Developer",
              "A Frontend Developer",
            ]}
          />
        </div>
        <div className="w-3/4">
          <p>
            a Junior Fullstack Developer with over a year of experience in
            building scalable and efficient web applications. I specialize in
            the JavaScript ecosystem, specifically Next.js for the frontend and
            Node.js for the backend. I have a proven track record of creating
            seamless user experiences and managing robust databases using Prisma
            and PostgreSQL.
          </p>
        </div>
        <div className="flex gap-4">
          <Button size={"lg"}>
            <Download /> Download CV
          </Button>
          <Button size={"lg"} variant={"outline"}>
            <MessageCircle /> Let's Talk
          </Button>
        </div>
        <div className="flex gap-4">
          <Link href={"#"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Github />
          </Button>
          </Link>
          <Link href={"#"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Linkedin />
          </Button>
          </Link>
          <Link href={"#"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Instagram />
          </Button>
          </Link>
          <Link href={"#"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Mail />
          </Button>
          </Link>
        </div>
      </BlurFade>
      <BlurFade inView direction="left">
        <GlassSurface
          width={400}
          height={400}
          borderRadius={999} // Membuat GlassSurface menjadi lingkaran sempurna
          className="my-custom-class overflow-hidden" // PENTING: agar gambar tidak keluar jalur
        >
          {/* Container gambar harus relatif agar 'fill' bekerja dan penuh 100% */}
          <div className=" w-[95%] h-[95%] bg-white rounded-full flex justify-center items-center overflow-hidden">
            <div className="relative w-full h-full rounded-full">
              <Image
                src="/assets/profile-pic.jpg"
                alt="Profile Picture"
                fill
                className="object-top object-cover"
                priority
              />
            </div>
          </div>
        </GlassSurface>
      </BlurFade>
    </section>
  );
};

export default AboutSections;
