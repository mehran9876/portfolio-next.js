import {
  SiAxios,
  SiBetterauth,
  SiCssmodules,
  SiFigma,
  SiJavascript,
  SiLeaflet,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiStandardjs,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiVim,
  SiVite,
} from "@icons-pack/react-simple-icons";
import * as React from "React";
import {
  ChartNoAxesGantt,
  ChevronsLeftRightEllipsis,
  Database,
  Ellipsis,
  Paintbrush,
  Panda,
  Toolbox,
} from "lucide-react";

type TechCategory = {
  id: string;
  title: string;
  icon: React.ReactElement;
  items: { name: string; icon: React.ReactNode }[];
};
const technologiesData: TechCategory[] = [
  {
    id: "main-frameworks",
    title: "Main Frameworks",
    icon: <ChevronsLeftRightEllipsis />,
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    icon: <ChartNoAxesGantt />,
    items: [
      { name: "Redux", icon: <SiRedux /> },
      { name: "Zustand", icon: <Panda /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    id: "api-calls",
    title: "API calls",
    icon: <Database />,
    items: [
      { name: "React query", icon: <SiReactquery /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "fetch", icon: <SiStandardjs /> },
    ],
  },
  {
    id: "css",
    title: "CSS",
    icon: <Paintbrush />,
    items: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Styled Comps", icon: <SiStyledcomponents /> },
      { name: "Modules", icon: <SiCssmodules /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: <Toolbox />,
    items: [
      { name: "vim", icon: <SiVim /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "figma", icon: <SiFigma /> },
    ],
  },
  {
    id: "other",
    title: "Other",
    icon: <Ellipsis />,
    items: [
      { name: "Leaflet", icon: <SiLeaflet /> },
      { name: "Better auth", icon: <SiBetterauth /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section flex w-8/10 max-w-350 scroll-mt-24 flex-col pt-10 pb-4 text-sm sm:scroll-mt-10 sm:pb-8 sm:text-base md:pt-22"
    >
      <h3 className="fancy-text mb-6 text-center text-3xl font-extrabold text-transparent sm:mb-12 sm:text-5xl">
        Skills & Tools
      </h3>
      <p className="mb-8 self-center text-center md:max-w-1/2">
        Tools and frameworks I use to build fast, scalable, and highly efficient
        web applications.
      </p>
      {/* <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-18 justify-center"> */}
      <div className="grid justify-center gap-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        {technologiesData.map((category) => (
          <TechnologyCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
{
  /* <div className="w-full sm:max-w-1/2 md:max-w-1/3 lg:w-1/4 px-6"> */
}
interface TechnologyCardProps {
  category: TechCategory;
}
function TechnologyCard({
  category: { icon, title, items },
}: TechnologyCardProps) {
  return (
    <figure className="flex h-full flex-col items-center justify-center rounded-2xl bg-slate-50 py-6 shadow-md sm:py-8 md:py-12 dark:bg-slate-900">
      <div className="mb-2 text-blue-600 *:h-16 *:w-full sm:mb-6 sm:*:h-20 dark:text-sky-500">
        {icon}
      </div>
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-600 sm:mb-12 sm:text-xl dark:text-sky-500">
        {title}
      </h3>
      <ul className="flex list-inside flex-wrap justify-center gap-x-4 gap-y-4 px-4">
        {items.map(({ name, icon }) => (
          <TechItem key={`${title}-${name}`} icon={icon}>
            {name}
          </TechItem>
        ))}
      </ul>
    </figure>
  );
}
interface TechItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}
function TechItem({ icon, children }: TechItemProps) {
  return (
    <li className="flex items-center gap-1">
      <span className="">{icon}</span> <span className="">{children}</span>
    </li>
  );
}
