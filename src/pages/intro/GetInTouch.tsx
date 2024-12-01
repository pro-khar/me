import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function GetInTouch() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <FaPaperPlane /> Get in Touch
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ml-8 md:ml-[100px] flex gap-2 p-2 bg-primary border-black border-[3px]">
        <a
          href="mailto:prakharvermamanu.veed@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="icon" variant="secondary">
            <MdEmail />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/pro-khar/"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="icon" variant="secondary">
            <FaLinkedin />
          </Button>
        </a>
        <div className="border-r-2 mx-2" />
        <a href="https://github.com/pro-khar" target="_blank" rel="noreferrer">
          <Button size="icon" variant="secondary">
            <FaGithub />
          </Button>
        </a>
        <a href="https://x.com/yourskinnydude" target="_blank" rel="noreferrer">
          <Button size="icon" variant="secondary">
            <BsTwitterX />
          </Button>
        </a>
      </PopoverContent>
    </Popover>
  );
}

export default GetInTouch;
