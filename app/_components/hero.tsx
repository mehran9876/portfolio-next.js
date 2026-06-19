import Link from "next/link";
import HeroPicture from "@/app/_components/Icon/hero-picture";

export default function Heron() {
  return (
    <section
      id="hero"
      className="section hero-background w-full text-sm sm:pt-24 sm:text-base"
    >
      <div className="mx-auto grid w-9/10 max-w-360 items-center gap-18 pt-12 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-center gap-2 text-center sm:gap-4 md:items-start md:text-start">
          <span className="text-secondary-text text-xs sm:text-sm">
            This is
          </span>
          <h1 className="fancy-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Mehran Ghari
          </h1>
          <div className="mt-4 mb-2 flex w-7/10 items-center justify-center md:hidden">
            <HeroPicture />
          </div>
          <p className="mt-4 mb-4 text-sm sm:text-lg">
            Talented developer comfortable with using cutting edge technologies
            and best practices to implement every feature.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#contact"
              className="fancy rounded-md px-4 py-2 text-sm text-slate-100 transition-shadow duration-100 hover:cursor-pointer hover:inset-shadow-sm hover:inset-shadow-blue-600 active:inset-shadow-blue-900 sm:px-8 sm:text-base"
            >
              Contact me...
            </Link>
            <Link
              href="#projects"
              className="dark:text-foreground cursor-pointer font-semibold text-sky-500 transition-colors duration-100 hover:text-sky-600"
            >
              My Projects
            </Link>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <HeroPicture />
        </div>
      </div>
    </section>
  );
}
