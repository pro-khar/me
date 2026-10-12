import { ChevronDown, Download } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function Navbar() {
  const navElement: { name: string; href: string; comingSoon?: boolean }[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects", comingSoon: true },

    { name: "Contact", href: "#contact", comingSoon: true },
  ];
  return (
    <>
      <div className="md:flex hidden items-center font-ibm-mono font-medium fixed top-2 z-50">
        <TooltipProvider delayDuration={100}>
          <div className="flex border-black border-[3px] border-r-0">
            {navElement.map((nav, i) => {
              const link = (
                <a
                  key={nav.href}
                  href={nav.href}
                  className="bg-[#24b5cf] dark:bg-zinc-700/55 backdrop-blur-md px-4 py-3 hover:text-white hover:bg-zinc-700 dark:hover:bg-zinc-500 transition-all duration-300"
                >
                  <span className="text-white mr-1">0{i + 1}</span>
                  {nav.name}
                </a>
              );
              return nav.comingSoon ? (
                <Tooltip key={nav.href}>
                  <TooltipTrigger asChild>{link}</TooltipTrigger>
                  <TooltipContent side="bottom">Coming soon</TooltipContent>
                </Tooltip>
              ) : (
                link
              );
            })}
          </div>
        </TooltipProvider>
        <a
          href="https://drive.google.com/file/d/1R_Bv-jHbsIWwBD3YkWBCisLTFOJJoh6P/view?usp=sharing"
          className="bg-primary dark:bg-zinc-500 border-black border-[3px] px-4 py-3 hover:text-white hover:bg-zinc-700 dark:hover:bg-zinc-800 transition-all duration-300 flex gap-2"
        >
          <Download /> Resume
        </a>
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" className="md:hidden fixed top-2 left-2 z-50">
            <ChevronDown />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-black dark:border-white/55 bg-primary-foreground border-[3px] rounded-none">
          <div className="grid grid-cols-2 gap-2 p-4">
            {navElement.map((nav, i) => (
              <DrawerClose asChild key={nav.href}>
                <Button
                  asChild
                  className="dark:border-white/55 dark:text-white py-6 w-full bg-[#24b5cf] dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-500 hover:text-white"
                >
                  <a href={nav.href}>
                    <span className="text-white mr-1">0{i + 1}</span>
                    {nav.name}
                    {nav.comingSoon && (
                      <span className="text-[10px] uppercase bg-black text-white px-1 rounded-sm">
                        Soon
                      </span>
                    )}
                  </a>
                </Button>
              </DrawerClose>
            ))}
            <DrawerClose asChild>
              <Button
                asChild
                className="dark:border-white/55 dark:text-white py-6 w-full bg-primary hover:bg-zinc-700 dark:hover:bg-zinc-500 hover:text-white"
              >
                <a href="https://drive.google.com/file/d/1R_Bv-jHbsIWwBD3YkWBCisLTFOJJoh6P/view?usp=sharing">
                  <Download /> Resume
                </a>
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
