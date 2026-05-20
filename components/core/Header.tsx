"use client";

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
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const navigationItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skill", label: "Skill" },
  { href: "/#project", label: "Project" },
  { href: "/#contact", label: "Contact" },
];

const Header: React.FunctionComponent = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-8">
      <div className="pointer-events-auto w-full max-w-4xl">
        <BlurFade inView>
          <GlassSurface
            width={"min(100%, 93vw)"}
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
              <NavigationMenu className="min-w-0 flex-1 justify-end hidden md:flex">
                <NavigationMenuList className="flex-nowrap justify-end overflow-x-auto">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink href={item.href}>
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <Drawer direction="right">
                <DrawerTrigger
                  aria-label="Open navigation menu"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </DrawerTrigger>
                <DrawerContent className="w-[min(18rem,calc(100vw-2rem))] px-3 pb-6">
                  <DrawerHeader className="px-1 py-5 text-left">
                    <DrawerTitle>Menu</DrawerTitle>
                  </DrawerHeader>
                  <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                    {navigationItems.map((item) => (
                      <DrawerClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className="flex min-h-11 w-full items-center rounded-md px-3 text-base font-medium text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {item.label}
                        </a>
                      </DrawerClose>
                    ))}
                  </nav>
                </DrawerContent>
              </Drawer>
            </div>
          </GlassSurface>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
