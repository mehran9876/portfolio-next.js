import * as React from "react";
import ProjectDialog from "@/app/_components/projects-dialog";
import { projectsData } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section flex w-8/10 max-w-350 scroll-mt-24 flex-col items-center pt-5 text-sm sm:mb-4 sm:scroll-mt-10 sm:pb-8 sm:text-base md:pt-22 lg:w-9/10"
    >
      <h3 className="fancy-text mb-6 bg-linear-to-r text-center text-3xl font-extrabold text-transparent sm:text-start sm:text-4xl">
        My latest projects
      </h3>
      <p className="mb-10">Here are some of my latest projects</p>
      <React.Suspense>
        <div className="grid w-full gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectDialog key={project.id} project={project} />
          ))}
        </div>
      </React.Suspense>
    </section>
  );
}
