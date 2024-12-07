import BgVid from "@/components/Bg-vid";
import GetInTouch from "./GetInTouch";

function Intro() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen w-full border-b-[3px]"
    >
      <BgVid />
      <div className="flex flex-col items-start p-8 gap-4 ">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-semibold leading-5 text-white/75">
            Hi, I'm
          </p>
          <p className="text-white ml-[-2px] text-4xl md:text-6xl font-bold tracking-tighter">
            Prakhar Verma.
          </p>
          <p className="text-sm font-semibold leading-5 text-white/75">
            Full Stack Software Developer | React | React-Native | Chip-Design
            Geek
          </p>
        </div>

        <p className="font-medium tracking-tight text-sm md:text-base max-w-xl mt-4 font-ibm-mono text-white/75">
          I love to build solutions with a keen eye for details and design.
          Experienced in developing Utility-oriented Mobile and Web apps,
          Internal tools and Solutions
          <br />
          <br />
          I’m also an Electronics and{" "}
          <span className=" text-white">Chip Design</span> hobbiyist exploring{" "}
          <span className=" text-white">RISC</span> and{" "}
          <span className=" text-white">ASIC</span> design principles.
        </p>
        <GetInTouch />
      </div>
    </div>
  );
}

export default Intro;
