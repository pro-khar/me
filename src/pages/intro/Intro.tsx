import BgVid from "@/components/Bg-vid";
import GetInTouch from "./GetInTouch";

function Intro() {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full border-b-[3px] overflow-hidden"
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
            Full Stack Software Engineer | React | React-Native | Chip-Design
            Geek
          </p>
        </div>

        <p className="font-medium tracking-tight text-sm md:text-base max-w-xl mt-4 font-ibm-mono text-white/75">
          Software engineer with ~2 years of full-stack experience, leading
          frontend for <span className=" text-white">Tradyon</span>'s product
          suite (web app, iOS/Android app and Outreach CRM) serving 10+ paying
          B2B customers.
          <br />
          <br />
          I built and shipped <span className=" text-white">TradeGenie</span>,
          an AI assistant for global trade, set up the cross-platform monorepo,
          and handled App Store and Play Store releases and infrastructure
          moves, with a focus on code quality, reliability and on-time delivery.
          <br />
          <br />
          I’m also an Electronics and{" "}
          <span className=" text-white">Chip Design</span> hobbyist exploring{" "}
          <span className=" text-white">RISC</span> and{" "}
          <span className=" text-white">ASIC</span> design principles.
        </p>
        <GetInTouch />
      </div>
    </div>
  );
}

export default Intro;
