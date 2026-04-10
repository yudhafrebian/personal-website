import * as React from "react";
import GlassSurface from "../GlassSurface";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { BlurFade } from "../ui/blur-fade";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="fixed inset-0 flex justify-center z-50 pointer-events-none mt-12">
      <div className="pointer-events-auto w-[50%] h-16">
        <BlurFade inView>
          <GlassSurface
            width={"100%"}
            height={60}
            borderRadius={50}
            className="my-custom-class px-4"
          >
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/logo-light.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <NavigationMenu>
                <NavigationMenuList>
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
