import { ChevronDown } from "lucide-react";

function Experience() {
  const expData = [
    {
      company: "Wyra AI Labs",
      position: "Software Engineer",
      startDate: "Dec 2024",
      endDate: "Present",
      technologies: [
        "React Native",
        "Monorepo",
        "Tailwind",
        "AWS",
        "Typescript",
      ],
      logo: "./experience/wyra-logo.jpg",
    },
    {
      company: "Bioquix",
      position: "Frontend Developer Intern",
      startDate: "Aug 2024",
      endDate: "Oct 2024",
      technologies: [
        "React.js",
        "Node.js",
        "Supabase",
        "Git",
        "HTML",
        "CSS",
        "Typescript",
      ],
      logo: "./experience/bioquix-logo.jpg",
    },
  ];
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[beige] dark:bg-black border-b-[3px]"
    >
      <div id="Exp container" className="max-w-(--breakpoint-2xl) flex flex-col gap-8">
        <h1 className="text-center text-3xl md:text-5xl font-semibold tracking-tighter w-full">
          Experience
        </h1>
        <div id="exp-list" className="w-full flex flex-col md:flex-row gap-4 ">
          {expData.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col border-[3px] w-[300px] h-fit "
            >
              <p className="border-b-[3px] text-sm tracking-tight text-center p-1">
                {exp.startDate} - {exp.endDate}
              </p>
              <div className="border-b-[3px] flex flex-row">
                <div className="border-r-[3px]">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-20 min-w-20 aspect-square"
                  />
                </div>
                <p className="text-xl font-semibold tracking-tight flex items-center justify-center w-full bg-background text-[beige]">
                  {exp.company}
                </p>
              </div>
              <div className="flex justify-between peer">
                <p className="  bg-[#24b5cf] p-2 font-medium border-r-[3px] w-full">
                  {exp.position}
                </p>
                <div className="flex items-center justify-center w-10 bg-primary hover:bg-primary-foreground ">
                  <ChevronDown />
                </div>
              </div>
              {/* <div
                id="on-toggle-details"
                className="p-1 gap-2 overflow-hidden hidden peer-hover:flex"
              >
                {exp.technologies.map((t1, i) => (
                  <p key={i} className="text-xs">
                    {t1}
                  </p>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
