import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ExperienceEntry = {
  company: string;
  note?: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
  logo: string;
};

function ExperienceCard({ exp }: { exp: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col border-[3px] w-[300px] h-fit">
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
        <div className="flex flex-col items-center justify-center w-full bg-background text-[beige]">
          <p className="text-xl font-semibold tracking-tight">{exp.company}</p>
          {exp.note && <p className="text-xs tracking-tight">{exp.note}</p>}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="  bg-[#24b5cf] p-2 font-medium border-r-[3px] w-full">
          {exp.position}
        </p>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} details for ${exp.company}`}
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 shrink-0 cursor-pointer bg-primary hover:bg-primary-foreground"
        >
          <ChevronDown
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t-[3px] p-3">
          <ul className="flex flex-col gap-2 list-disc pl-4 text-sm tracking-tight">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 font-ibm-mono">
            {exp.technologies.map((t1, i) => (
              <span
                key={i}
                className="text-xs bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded-md tracking-tight font-semibold"
              >
                {t1}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Experience() {
  // Ordered newest-first — expData[0] is the one that stays centered.
  const expData: ExperienceEntry[] = [
    {
      company: "Tradyon",
      position: "Software Engineer",
      startDate: "Dec 2024",
      endDate: "Present",
      highlights: [
        "Led frontend across the tradyon.ai web app, iOS/Android app and Outreach CRM, mentoring 3–4 interns.",
        "Built TradeGenie, an AI trade assistant with streaming answers, voice input and generated reports.",
        "Shipped 12+ App Store and Play Store releases and migrated AWS infra across regions with zero downtime.",
      ],
      technologies: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "AWS",
        "Dify",
      ],
      logo: "./experience/tradyon-logo.svg",
    },
    {
      company: "Tokihub",
      note: "formerly Bioquix",
      position: "Software Engineer Intern",
      startDate: "Aug 2024",
      endDate: "Oct 2024",
      highlights: [
        "Built state-managed UIs with React and Redux, cutting load times by 80% through asset optimization.",
        "Developed a custom Quill.js-based CMS on Supabase with sub-200ms API latency.",
        "Deployed on AWS (S3, CloudFront, Route 53) with 99.9% availability.",
      ],
      technologies: [
        "React.js",
        "Supabase",
        "shadcn/ui",
        "TypeScript",
        "AWS S3",
        "CloudFront",
      ],
      logo: "./experience/bioquix-logo.jpg",
    },
  ];

  const [latest, ...previous] = expData;

  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[beige] dark:bg-black border-b-[3px]"
    >
      <div
        id="Exp container"
        className="max-w-(--breakpoint-2xl) flex flex-col gap-8 px-4"
      >
        <h1 className="text-center text-3xl md:text-5xl font-semibold tracking-tighter w-full">
          Experience
        </h1>

        <div
          id="exp-list"
          className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center"
        >
          <ExperienceCard exp={latest} />

          {previous.length > 0 && (
            <div className="flex flex-col items-center gap-6">
              {previous.map((exp, index) => (
                <div
                  key={index}
                  className="opacity-50 transition-opacity duration-300 hover:opacity-100 active:opacity-100 focus-within:opacity-100 has-[[aria-expanded=true]]:opacity-100"
                >
                  <ExperienceCard exp={exp} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
