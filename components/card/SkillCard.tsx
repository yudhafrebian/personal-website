import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { skills } from "@/lib/data";
import { Badge } from "../ui/badge";
import { BlurFade } from "../ui/blur-fade";

interface ISkillCardProps {}

const SkillCard: React.FunctionComponent<ISkillCardProps> = (props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <BlurFade key={index} inView direction="up" delay={0.25 * (index + 1)}>
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>{skill.description}</div>
            </CardContent>
            <CardFooter>
              <ul className="flex flex-wrap gap-2">
                {skill.keywords.map((keyword, index) => (
                  <li key={index}>
                    <Badge>{keyword}</Badge>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
};

export default SkillCard;
