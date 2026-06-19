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
import {
  ChartNoAxesGantt,
  ChevronsLeftRightEllipsis,
  Database,
  Ellipsis,
  Paintbrush,
  Panda,
  Toolbox,
} from "lucide-react";

export type TechCategory = {
  id: string;
  title: string;
  icon: React.ReactElement;
  items: { name: string; icon: React.ReactNode }[];
};

export const technologiesData: TechCategory[] = [
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
