"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "../../lib/utils"
import { Icons } from "../../components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI Headshots",
    href: "https://ai-headshots-delta.vercel.app/",
    description:
      "Uses an AI model to generate professional headshots from your photos.",
  },
  {
    title: "Playlistify",
    href: "https://github.com/coenhewes/playlistify",
    description: "A Spotify playlist generator.",
  },
  {
    title: "AlwaysLander",
    href: "https://www.alwayslander.com",
    description: "A email verification tool for sales teams.",
  },
  {
    title: "Portfolio",
    href: "https://github.com/coenhewes/public-portfolio/",
    description: "My personal portfolio.",
  }
  ]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Coen Hewes
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     I am a full-stack developer and Revenue Operations professional. 
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/dev" title="Software Development">
                Turing ideas into reality.
              </ListItem>
              <ListItem href="/revops" title="Revenue Operations">
                I help start ups build and scale their revenue function. Everything from self-serve to Sales-led. 
              </ListItem>
                          </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="mailto:coenhewes@proton.me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
 <NavigationMenuItem>
          <Link href="https://github.com/coenhewes/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Github
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
