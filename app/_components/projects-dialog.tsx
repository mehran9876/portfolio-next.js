"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Project } from "@/lib/data/projects";
import { Separator } from "@/app/_components/ui/separator";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE_PICTURE_ANIMATION_SPEED = 5;

interface ProjectDialogProps {
  project: Project;
}
export default function ProjectDialog({
  project: {
    id: projectId,
    title,
    cardDesc,
    image,
    shortInfo,
    fullInfo,
    techStack,
    inProgress = false,
    // demo,
  },
}: ProjectDialogProps) {
  const searchParams = useSearchParams();
  const [showScrollButton, setShowScrollButton] = useState<boolean>(true);
  const isOpen = searchParams.get("project") === projectId;
  const observerRef = useRef<IntersectionObserver>(null);

  const imageBoxAspectRatio = 1.6;
  const projectPictureAnimationTimeMultiplier =
    imageBoxAspectRatio / image.aspectRatio;

  const projectPictureAnimationDuration =
    (
      BASE_PICTURE_ANIMATION_SPEED * projectPictureAnimationTimeMultiplier
    ).toFixed(2) + "s";

  const showScrollButtonCallback = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const rootElement = node.closest(".showScrollBtnViewPort");

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.at(0)?.isIntersecting) {
            setShowScrollButton(false);
          } else {
            setShowScrollButton(true);
          }
        },
        { root: rootElement, threshold: [0.1] },
      );

      observer.observe(node);
      observerRef.current = observer;

      return () => {
        observer.disconnect();
        observerRef.current = null;
      };
    },
    [],
  );

  return (
    <Dialog defaultOpen={isOpen}>
      <DialogTrigger
        asChild
        className="group focus-visible:border-ring focus-visible:ring-ring/50"
      >
        <figure className="group-focus:border-ring group-focus:ring-ring/50 flex flex-1 flex-col hover:cursor-pointer">
          <div className="relative mb-2 aspect-16/10 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl active:shadow-lg sm:mb-4">
            <div className="fancy absolute top-0 left-0 z-2 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
            {inProgress && <InProgressBadge />}
            <Image
              src={image.cardSrc ? image.cardSrc : image.src}
              alt={image.cardAlt ? image.cardAlt : image.alt}
              fill
              className={`${image.cardSrc ? "" : "animate-vertical-yoyo"} z-1 object-cover object-top`}
              style={
                {
                  "--scroll-duration": projectPictureAnimationDuration,
                } as React.CSSProperties
              }
              loading="lazy"
            />
            <Image
              src="/preview.png"
              width={58}
              height={40}
              alt="binocular icon"
              className="absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
          <h3 className="text-center text-lg font-bold sm:text-xl">{title}</h3>
          <p className="text-secondary-text text-center text-xs sm:text-sm">
            {cardDesc}
          </p>
        </figure>
      </DialogTrigger>

      <DialogContent className="min-h-85/100 min-w-85/100 pt-12">
        <ScrollArea className="showScrollBtnViewPort h-[75vh]">
          <section className="mx-auto flex flex-col items-center gap-4 px-6 py-4 text-sm sm:px-12 sm:text-base">
            <DialogHeader>
              <DialogTitle className="fancy-text mb-4 text-center text-3xl font-bold sm:text-4xl">
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl sm:mb-12">
              {inProgress && <InProgressBadge size="md" />}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="animate-vertical-yoyo top-0 object-cover object-top"
                style={
                  {
                    "--scroll-duration": projectPictureAnimationDuration,
                  } as React.CSSProperties
                }
              />
            </div>

            <div ref={showScrollButtonCallback}>
              <div
                className="mb-6 flex flex-col items-center gap-4 px-2 sm:px-4 lg:grid-cols-4 lg:flex-row"
                id={`${projectId}-description`}
              >
                <ul className="text-card-foreground my-2 flex flex-wrap justify-center gap-3 pr-4 lg:flex-col lg:border-r-2">
                  {techStack.map((tech) => (
                    <ProjectTechItem
                      key={`${projectId}-${tech.name}`}
                      icon={tech.icon}
                    >
                      {tech.name}
                    </ProjectTechItem>
                  ))}
                </ul>
                <p className="text-secondary-text w-9/10 pl-4 text-center lg:col-span-3 lg:text-start">
                  {shortInfo}
                </p>
              </div>
              <Separator className="lg:hidden" />
              <div className="">
                <h5 className="mb-4 text-center text-lg font-semibold">
                  Full Description
                </h5>
                <div className="md:text-justify">{fullInfo}</div>
              </div>
            </div>
          </section>
        </ScrollArea>

        <div
          className={`from-background via-background/70 bg-gradient-to-top pointer-events-none absolute right-0 bottom-0 left-0 h-43 to-transparent transition-opacity duration-300 ${
            showScrollButton ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          aria-label="Scroll down button"
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 ${showScrollButton ? "block" : "hidden"}`}
        >
          <button
            className="flex cursor-pointer items-end justify-end px-4 py-2 text-2xl font-bold text-blue-700 dark:text-blue-300"
            onClick={() =>
              document
                .getElementById(`${projectId}-description`)
                ?.scrollIntoView()
            }
          >
            <span>Scroll Down</span>
            <ChevronDown />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ProjectTechItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}
function ProjectTechItem({ icon, children }: ProjectTechItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="">{icon}</span>{" "}
      <span className="min-w-max">{children}</span>
    </li>
  );
}

const InProgressBadge = ({
  size = "sm",
  className,
  ...props
}: {
  size?: "sm" | "md";
  className?: string;
}) => (
  <span
    className={cn(
      "absolute top-2 left-2 z-10 rounded-full bg-yellow-400 px-2 py-1 text-xs font-semibold text-yellow-950",
      size === "md" ? "px-3 py-1.5 text-sm" : "",
      className,
    )}
    {...props}
  >
    In Progress
  </span>
);
