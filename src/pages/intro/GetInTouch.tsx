import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
      <PopoverContent className="flex gap-2 p-2 bg-primary border-black border-[3px] w-full">
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
      </PopoverContent>
    </Popover>
  );
}

export default GetInTouch;
