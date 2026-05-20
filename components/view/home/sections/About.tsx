"use client";

import GlassSurface from "@/components/GlassSurface";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { WordRotate } from "@/components/ui/word-rotate";
import { Download, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const AboutSections: React.FunctionComponent = () => {

  const handleDownloadCv = () => {
    const cvUrl = "/CV - Ananda Yudha Frebiansyah.pdf";
    const link = document.createElement("a");

    link.href = encodeURI(cvUrl);
    link.download = "CV - Ananda Yudha Frebiansyah.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="flex min-h-screen flex-col-reverse items-center justify-center gap-10 px-4 py-20 sm:px-6 md:px-16 lg:flex-row lg:justify-between lg:px-36 2xl:px-64"
      id="about"
    >
      <BlurFade inView direction="right" className="flex w-full max-w-3xl flex-col gap-6 lg:w-2/3">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            <Highlighter action="underline">Hi, I&apos;m</Highlighter>
          </h2>
          <WordRotate
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            words={[
              "Ananda Yudha Frebiansyah",
              "A Fullstack Developer",
              "A Frontend Developer",
            ]}
          />
        </div>
        <div className="w-full text-muted-foreground lg:w-3/4">
          <p>
            a Junior Fullstack Developer with over a year of experience in
            building scalable and efficient web applications. I specialize in
            the JavaScript ecosystem, specifically Next.js for the frontend and
            Node.js for the backend. I have a proven track record of creating
            seamless user experiences and managing robust databases using Prisma
            and PostgreSQL.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button size={"lg"} onClick={handleDownloadCv}>
            <Download /> Download CV
          </Button>
          <Link href={"#contact"}>
          <Button size={"lg"} variant={"outline"}>
            <MessageCircle /> Let&apos;s Talk
          </Button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"https://github.com/yudhafrebian"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Github />
          </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/ananda-yudha-382533190/"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Linkedin />
          </Button>
          </Link>
          <Link href={"https://www.instagram.com/yudha_frebian/"}>
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Instagram />
          </Button>
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=anandayudha777@gmail.com">
          <Button size={"icon-lg"} variant={"secondary"} className="hover:scale-110">
              <Mail />
          </Button>
          </Link>
        </div>
      </BlurFade>
      <BlurFade inView direction="left">
        <GlassSurface
          width={"min(78vw, 400px)"}
          height={"min(78vw, 400px)"}
          borderRadius={999} 
          className="my-custom-class overflow-hidden" 
        >
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
