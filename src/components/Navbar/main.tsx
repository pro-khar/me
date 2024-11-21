import { ChevronDown, Download } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";

function Navbar() {
  const navElement = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <div className="md:flex hidden items-center font-ibm-mono font-medium fixed top-2">
        <div className="flex border-black border-[3px] border-r-0">
          {navElement.map((nav, i) => (
            <a
              href={nav.href}
              className="bg-[#24b5cf] px-4 py-3 hover:text-white hover:bg-zinc-700 transition-all duration-300"
            >
              <span className="text-white mr-1">0{i + 1}</span>
              {nav.name}
            </a>
          ))}
        </div>
        <a
          href=""
          className="bg-primary border-black border-[3px] px-4 py-3 hover:text-white hover:bg-zinc-700 transition-all duration-300 flex gap-2"
        >
          <Download /> Resume
        </a>
      </div>

      <Drawer>
        <DrawerTrigger className="md:hidden fixed top-2 left-2">
          <Button size="icon">
            <ChevronDown />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-black dark:border-white bg-primary-foreground border-[3px] rounded-none">
          <DrawerClose>
            <div className="grid grid-cols-2 gap-2 p-4">
              {navElement.map((nav, i) => (
                <a
                  href={nav.href}
                  className=" hover:text-white hover:bg-black transition-all duration-300 w-full"
                >
                  <Button className="py-6 w-full bg-[#24b5cf] hover:bg-zinc-700 hover:text-white">
                    <span className="text-white mr-1">0{i + 1}</span>
                    {nav.name}
                  </Button>
                </a>
              ))}
              <a
                href=""
                className="hover:text-white hover:bg-black transition-all duration-300 w-full"
              >
                <Button className="py-6 w-full bg-primary hover:bg-zinc-700 hover:text-white">
                  <Download /> Resume
                </Button>
              </a>
            </div>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
