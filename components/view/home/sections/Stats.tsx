import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import * as React from "react";

interface IStatsProps {}

const Stats: React.FunctionComponent<IStatsProps> = (props) => {
  return (
    <BlurFade inView direction="up">
      <section className="grid grid-cols-4 w-full px-36 bg-secondary py-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={1} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-xl text-gray-400">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={12} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-xl text-gray-400">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={10} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-xl text-gray-400">Tech Stacks</p>
        </div>
        <div className="flex flex-col items-center">
          <NumberTicker value={791} className="text-3xl" />
          <p className="text-xl text-gray-400">Github Contributions</p>
        </div>
      </section>
    </BlurFade>
  );
};

export default Stats;
