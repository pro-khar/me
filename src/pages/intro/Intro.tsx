import BgVid from "@/components/Bg-vid";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import GetInTouch from "./GetInTouch";

function Intro() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <BgVid />
      <div className="flex flex-col items-start p-8 gap-4 ">
        {/* <p className="text-3xl font-semibold tracking-tighter text-white/75">
          Hi, I'm
          <br /> <span className="text-white text-5xl md:text-6xl font-bold tracking-tighter">Prakhar Verma.</span>
          <br/><span className="text-lg md:text-2xl font-semibold tracking-tight text-white/75">Designer - Developer | Embedded systems | Chip design</span>
        </p> */}
        <div className="flex flex-col gap-0">
          <p className="text-xl font-semibold leading-5 text-white/75">
            Hi, I'm
          </p>
          <p className="text-white ml-[-2px] text-4xl md:text-6xl font-bold tracking-tighter">
            Prakhar Verma.
          </p>
          <p className="text-sm font-semibold leading-5 text-white/75">
            Full Stack Web Developer | Chip design Enthusiast
          </p>
        </div>

        <p className="font-medium tracking-tight text-sm md:text-base max-w-xl mt-4 font-ibm-mono text-white/75">
          I'm an engineer specializing in{" "}
          <span className=" text-white">Software development</span> with modern
          UI/UX design methodologies.
          <br />
          <br />
          I’m also an Electronics and{" "}
          <span className=" text-white">Chip Design</span> enthusiast.
          Currently, focused on development of a custom{" "}
          <span className=" text-white">RISC</span> based{" "}
          <span className=" text-white">ASIC</span> design of a processor.
        </p>
        <GetInTouch/>
      </div>
    </div>
  );
}

export default Intro;
