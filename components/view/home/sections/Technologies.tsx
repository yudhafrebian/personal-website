import { Marquee } from "@/components/ui/marquee";
import { technologies } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ITechnologiesSectionProps {}

const TechnologiesSection: React.FunctionComponent<
  ITechnologiesSectionProps
> = (props) => {
  return (
    <section className="bg-secondary py-6">
      <Marquee repeat={6} pauseOnHover>
        {technologies.map((technology) => (
          <Link
            className="hover:scale-110 hover:opacity-70 hover:transition-all duration-300 ease-in-out mx-8"
            key={technology.id}
            href={technology.link}
            target="_blank"
          >
            <Image
              src={technology.icon}
              alt={technology.name}
              width={60}
              height={60}
            />
          </Link>
        ))}
      </Marquee>
    </section>
  );
};

export default TechnologiesSection;
