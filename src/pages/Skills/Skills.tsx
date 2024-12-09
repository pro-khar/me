import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAws,
  FaCloudflare,
  FaFigma,
  FaGit,
  FaGithub,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { FaGolang, FaLinux, FaReact } from "react-icons/fa6";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiGnubash,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbSql } from "react-icons/tb";

import { useTheme } from "@/components/theme-provider";

function Skills() {
  const { theme } = useTheme();
  console.log(theme);

  function TextIcon(props: { name: string }) {
    return (
      <p className="text-base bg-black text-white dark:bg-white dark:text-black py-2 px-3 rounded-xl tracking-tighter font-semibold">
        {props.name}
      </p>
    );
  }

  const skData = [
    {
      category: "Programming",
      skills: [
        { name: "Javascript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },

        { name: "C/C++", icon: <TbBrandCpp /> },
        { name: "Go", icon: <FaGolang /> },
      ],
    },
    {
      category: "Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },

        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { name: "Supabase", icon: <RiSupabaseFill /> },

        { name: "RESTful APIs", icon: <TextIcon name="APIs" /> },
      ],
    },
    {
      category: "Design/UI/UX",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
      ],
    },

    {
      category: "Cloud",
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
              className="w-12 rounded"
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
              className="w-12 rounded"
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
              className="w-12 rounded"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
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
              className="w-12 rounded"
              alt={`EC2 ${theme === "dark" ? "Dark" : "Light"}`}
            />
          ),
        },
        { name: "Cloudflare", icon: <FaCloudflare /> },
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
    {
      category: "Databases",
      skills: [
        { name: "SQL", icon: <TbSql /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { name: "Supabase", icon: <RiSupabaseFill /> },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "English", icon: <TextIcon name="En" /> },
        { name: "Hindi", icon: <TextIcon name="Hi" /> },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-full bg-background dark:bg-black md:py-32 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-7 gap-4">
        {skData.map((item, i) => (
          <div id="one-container" className="relative group" key={i}>
            <div className="bg-[beige] dark:bg-zinc-500 w-[250px] h-[250px border-[3px] dark:border-white/55 relative font-ibm-mono group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0)] dark:group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255)]  transition-all delay-100 flex flex-col items-center justify-end">
              <div className="absolute top-[-3px] left-[-3px] bg-[#24b5cf] border-[3px] w-[250px] p-4 text-lg font-semibold group-hover:top-2 group-hover:-left-4 transition-all duration-100 text-center md:text-left">
                {item.category}
              </div>
              <div
                id="skill-group"
                className="grid grid-cols-3 w-full gap-x-2 gap-y-4 place-items-center p-4 mt-16"
              >
                {item.skills.map((skill, i) => (
                  <div className="text-5xl" key={i}>
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
