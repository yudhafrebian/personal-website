import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import * as React from "react";

const Stats: React.FunctionComponent = () => {
  return (
    <BlurFade inView direction="up">
      <section className="grid w-full grid-cols-1 gap-6 bg-secondary px-4 py-8 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-36">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={1} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-base text-gray-400 sm:text-lg xl:text-xl">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={12} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-base text-gray-400 sm:text-lg xl:text-xl">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker value={10} className="text-3xl" />
            <p>+</p>
          </div>
          <p className="text-base text-gray-400 sm:text-lg xl:text-xl">Tech Stacks</p>
        </div>
        <div className="flex flex-col items-center">
          <NumberTicker value={791} className="text-3xl" />
          <p className="text-base text-gray-400 sm:text-lg xl:text-xl">Github Contributions</p>
        </div>
      </section>
    </BlurFade>
  );
};

export default Stats;
