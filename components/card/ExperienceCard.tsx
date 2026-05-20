import { Badge } from "../ui/badge";
import { BlurFade } from "../ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { experience } from "@/lib/data";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {experience.map((item, index) => (
        <BlurFade key={index} inView direction="up" delay={0.25 * (index + 1)}>
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>{item.title}</div>
                  <Badge className="w-fit">{item.date}</Badge>
                </div>
              </CardTitle>
              <CardDescription>
                {item.company} | {item.city}, {item.country}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
};

export default ExperienceCard;
