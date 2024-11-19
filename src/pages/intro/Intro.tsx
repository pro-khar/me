import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";

function Intro() {
  return (
    <div
      id="hero"
      className="bg-background flex flex-col items-center justify-center min-h-screen w-full"
    >
      <div className="flex flex-col items-start p-8 gap-4 text-white">
        <p className="text-4xl font-semibold tracking-tighter">
          Hi, I'm
          <br /> <span className="text-5xl font-bold">Prakhar Verma.</span>
        </p>
        <p className="text-lg font-semibold tracking-tight text-white/75">
          Designer - Developer | Embedded systems | Chip design
        </p>
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
        <Button><FaPaperPlane/> Get in Touch</Button>
      </div>
    </div>
  );
}

export default Intro;
