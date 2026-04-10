import { projects } from "@/lib/data";
import * as React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { BorderBeam } from "../ui/border-beam";

interface IFeaturedProjectCardsProps {}

const FeaturedProjectCards: React.FunctionComponent<
  IFeaturedProjectCardsProps
> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="relative mx-auto w-full max-w-sm pt-0 group hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="absolute inset-0 z-30 aspect-video bg-black/10" />
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="aspect-video w-full "
          />

          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardAction>
              <Badge variant={"outline"}>{project.type}</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col justify-between gap-2 h-full">
            <p className="text-sm text-muted-foreground">
              {project.short_description}
            </p>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block w-fit">
                    {project.live ? (
                      <Link
                        href={project.live ? project.live : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.live}
                          className="hover:scale-110 transition-all duration-200 ease-in-out"
                        >
                          <ExternalLink />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant={"outline"}
                        size={"icon-sm"}
                        disabled={!project.live}
                      >
                        <ExternalLink />
                      </Button>
                    )}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {project.live
                      ? "View Project"
                      : "Project is private due to NDA"}
                  </p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block w-fit">
                    {project.github ? (
                      <Link
                        href={project.github ? project.github : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.github}
                          className="hover:scale-110 transition-all duration-200 ease-in-out"
                        >
                          <Github />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant={"outline"}
                        size={"icon-sm"}
                        disabled={!project.github}
                      >
                        <Github />
                      </Button>
                    )}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {project.github
                      ? "View Source Code"
                      : "Source code not available"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <Badge key={idx} variant={"outline"}>
                {tech}
              </Badge>
            ))}
          </CardFooter>

          <BorderBeam
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            duration={10}
            size={300}
            borderWidth={2}
            colorFrom="#ffaa40"
            colorTo="white"
          />
          <BorderBeam
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            duration={10}
            delay={5}
            size={300}
            borderWidth={2}
          />
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProjectCards;
