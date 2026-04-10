import * as React from "react";
import HeroSections from "./sections/Hero";
import AboutSections from "./sections/About";
import Stats from "./sections/Stats";
import ExperienceSections from "./sections/Experience";
import SkillSection from "./sections/Skill";
import TechnologiesSection from "./sections/Technologies";
import FeaturedProjectsSection from "./sections/Projects";

interface IHomePageViewProps {}

const HomePageView: React.FunctionComponent<IHomePageViewProps> = (props) => {
  return (
    <>
      <HeroSections />
      <AboutSections />
      <Stats />
      <ExperienceSections />
      <SkillSection />
      <TechnologiesSection />
      <FeaturedProjectsSection />
    </>
  );
};

export default HomePageView;
