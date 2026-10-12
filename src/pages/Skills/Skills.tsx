import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAws,
  FaCloudflare,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { FaGolang, FaLinux, FaReact } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiOpenaiFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiApacheecharts,
  SiClaudecode,
  SiDify,
  SiExpo,
  SiFastapi,
  SiGithubactions,
  SiGnubash,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbSql } from "react-icons/tb";

import { useTheme } from "@/components/theme-provider";

function TextIcon(props: { name: string }) {
  return (
    <p className="text-base bg-black text-white dark:bg-white dark:text-black py-3 px-4 rounded-xl tracking-tighter font-semibold">
      {props.name}
    </p>
  );
}

function Skills() {
  const { theme } = useTheme();
  console.log(theme);

  const skData = [
    {
      category: "Frontend & Mobile",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "TanStack Query", icon: <SiReactquery /> },
      ],
      more: ["React Native", "Zustand", "Server-Driven UI"],
    },
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Javascript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Golang", icon: <FaGolang /> },
        { name: "C++", icon: <TbBrandCpp /> },
      ],
    },
    {
      category: "UI & Data",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "shadcn/ui", icon: <SiShadcnui /> },
        { name: "ECharts", icon: <SiApacheecharts /> },
      ],
      more: ["Gluestack UI", "AG Grid", "TipTap", "i18n + RTL", "Highcharts"],
    },
    {
      category: "AI/Tools",
      skills: [
        { name: "Dify", subtitle: "LLM workflows", icon: <SiDify /> },
        { name: "Claude Code", icon: <SiClaudecode /> },
        { name: "Codex", icon: <RiOpenaiFill /> },
      ],
      more: ["Prompt design", "Streaming chat (SSE)", "Speech-to-text"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        {
          name: "AWS S3",
          icon: (
            <img
              src={
                theme === "dark"
                  ? "/Skills/Simple Storage Service_dark.svg"
                  : "/Skills/Simple Storage Service.svg"
              }
              className="w-8"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        {
          name: "EC2",
          icon: (
            <img
              src={
                theme === "dark" ? "/Skills/EC2_dark.svg" : "/Skills/EC2.svg"
              }
              className="w-8"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        {
          name: "CloudFront",
          icon: (
            <img
              src={
                theme === "dark"
                  ? "/Skills/CloudFront_dark.svg"
                  : "/Skills/CloudFront.svg"
              }
              className="w-8"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        {
          name: "Cognito",
          icon: (
            <img
              src={
                theme === "dark"
                  ? "/Skills/Cognito_dark.svg"
                  : "/Skills/Cognito.svg"
              }
              className="w-8"
              alt={`Cognito ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        {
          name: "ECS",
          icon: (
            <img
              src={
                theme === "dark" ? "/Skills/ECS_dark.svg" : "/Skills/ECS.svg"
              }
              className="w-8"
              alt={`ECS ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        {
          name: "Route 53",
          icon: (
            <img
              src={
                theme === "dark"
                  ? "/Skills/Route 53_dark.svg"
                  : "/Skills/Route 53.svg"
              }
              className="w-8"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        { name: "Cloudflare", icon: <FaCloudflare /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Terraform", icon: <SiTerraform /> },
      ],
      more: ["Expo EAS"],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "go-chi", icon: <FaGolang /> },
        { name: "Gorilla Mux", icon: <FaGolang /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { name: "SQL", icon: <TbSql /> },
        { name: "Supabase", icon: <RiSupabaseFill /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "Bash", icon: <SiGnubash /> },
        { name: "Git", icon: <FaGit /> },
        { name: "Github", icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col gap-8 md:gap-16 items-center justify-center w-full bg-background dark:bg-black md:py-32 py-16 border-b-[3px]"
    >
      <div>
        <h1 className="text-center md:text-left text-3xl md:text-5xl font-semibold tracking-tighter w-full">
          My Skillset
        </h1>
        {/* <hr className="w-full border-black dark:border-white" /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {skData.map((item, i) => (
          <div id="one-container" className="relative group" key={i}>
            <div className="bg-[beige] dark:bg-zinc-500 w-62.5 h-[250px border-[3px] dark:border-white/55 relative font-ibm-mono group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0)] dark:group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255)]  transition-all delay-100 flex flex-col items-center justify-end">
              <div className="absolute -top-0.75 -left-0.75 bg-[#24b5cf] border-[3px] w-62.5 p-3 text-lg font-semibold group-hover:top-2 group-hover:-left-4 transition-all duration-100 text-center md:text-left">
                {item.category}
              </div>
              <div
                id="skill-group"
                className="p-4 mt-14 flex flex-wrap gap-1 w-full"
              >
                {item.skills.map((skill, i) => (
                  <div className="flex-col items-start" key={i}>
                    <div className="flex items-center">
                      <div className="text-[32px] border p-0.5 bg-pink-300 dark:bg-pink-800">
                        {skill.icon}
                      </div>
                      <p className="px-2 border border-l-0 h-full py-1.5 bg-foreground/70 text-accent">
                        {skill.name}
                      </p>
                    </div>
                    {skill.subtitle && (
                      <div className="text-[11px] bg-zinc-300 overflow-hidden border border-t-0">
                        {skill.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {item.more && (
                <div className="flex flex-wrap gap-2 w-full px-4 pb-4">
                  {item.more.map((name) => (
                    <span
                      key={name}
                      className="text-xs bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded-md tracking-tight font-semibold"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
