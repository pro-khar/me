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
    // <DropdownMenu>
    //   <DropdownMenuTrigger>
    //     <Button>
    //       <FaPaperPlane /> Get in Touch
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem>
    //         <Button size="icon">
    //           <MdEmail />
    //         </Button>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem>
    //         <Button size="icon"><FaLinkedin/></Button>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <Popover>
      <PopoverTrigger>
        <Button>
          <FaPaperPlane /> Get in Touch
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex gap-2 p-2 bg-primary border-black border-[3px] w-full">
        <Button size="icon" variant="secondary">
          <MdEmail />
        </Button>
        <Button size="icon" variant="secondary">
          <FaLinkedin />
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default GetInTouch;
