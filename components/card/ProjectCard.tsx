import { projects } from "@/lib/data";
import {
  Card,
  CardAction,
  CardContent,
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const FeaturedProjectCards = () => {
  return (
    <>
      <div className="mt-8 hidden md:grid grid-cols-[minmax(0,384px)] justify-center gap-6 md:grid-cols-[repeat(2,minmax(320px,384px))] lg:grid-cols-[repeat(3,minmax(320px,384px))] lg:gap-8 ">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative w-full pt-0 group hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/10" />
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="aspect-video w-full object-cover"
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
                          aria-label={
                            project.live
                              ? `Open ${project.title} live project`
                              : `${project.title} project is private`
                          }
                        >
                          <Button
                            variant={"outline"}
                            size={"icon-sm"}
                            disabled={!project.live}
                            className="hover:scale-110 transition-all duration-200 ease-in-out"
                            aria-label={
                              project.live
                                ? `View ${project.title} live project`
                                : `${project.title} project is private`
                            }
                          >
                            <ExternalLink />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.live}
                          aria-label={`${project.title} project is private`}
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
                          aria-label={
                            project.github
                              ? `Open ${project.title} source code`
                              : `${project.title} source code not available`
                          }
                        >
                          <Button
                            variant={"outline"}
                            size={"icon-sm"}
                            disabled={!project.github}
                            className="hover:scale-110 transition-all duration-200 ease-in-out"
                            aria-label={
                              project.github
                                ? `View ${project.title} source code`
                                : `${project.title} source code not available`
                            }
                          >
                            <Github />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.github}
                          aria-label={`${project.title} source code not available`}
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
      <Carousel className="md:hidden mt-8" >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <Card className="relative w-full pt-0 group hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="absolute inset-0 z-30 aspect-video bg-black/10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="aspect-video w-full object-cover"
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
                          aria-label={
                            project.live
                              ? `Open ${project.title} live project`
                              : `${project.title} project is private`
                          }
                        >
                          <Button
                            variant={"outline"}
                            size={"icon-sm"}
                            disabled={!project.live}
                            className="hover:scale-110 transition-all duration-200 ease-in-out"
                            aria-label={
                              project.live
                                ? `View ${project.title} live project`
                                : `${project.title} project is private`
                            }
                          >
                            <ExternalLink />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.live}
                          aria-label={`${project.title} project is private`}
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
                          aria-label={
                            project.github
                              ? `Open ${project.title} source code`
                              : `${project.title} source code not available`
                          }
                        >
                          <Button
                            variant={"outline"}
                            size={"icon-sm"}
                            disabled={!project.github}
                            className="hover:scale-110 transition-all duration-200 ease-in-out"
                            aria-label={
                              project.github
                                ? `View ${project.title} source code`
                                : `${project.title} source code not available`
                            }
                          >
                            <Github />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant={"outline"}
                          size={"icon-sm"}
                          disabled={!project.github}
                          aria-label={`${project.title} source code not available`}
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default FeaturedProjectCards;
