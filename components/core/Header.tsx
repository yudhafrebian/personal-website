import * as React from "react";
import GlassSurface from "../GlassSurface";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { BlurFade } from "../ui/blur-fade";

const Header: React.FunctionComponent = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-8">
      <div className="pointer-events-auto w-full max-w-4xl">
        <BlurFade inView>
          <GlassSurface
            width={"100%"}
            height={60}
            borderRadius={50}
            className="my-custom-class px-3 sm:px-4"
          >
            <div className="flex w-full min-w-0 items-center justify-between gap-3">
              <Image
                src="/assets/logo-light.png"
                alt="Logo"
                width={40}
                height={40}
                className="shrink-0"
              />
              <NavigationMenu className="min-w-0 flex-1 justify-end">
                <NavigationMenuList className="flex-nowrap justify-end overflow-x-auto">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#home">home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#about">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#experience">
                      Experience
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#skill">
                      Skill
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#project">
                      Project
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/#contact">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </GlassSurface>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
