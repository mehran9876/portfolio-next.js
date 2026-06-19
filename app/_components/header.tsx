"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ModeToggle } from "@/app/_components/theme/theme-button";
import type { Route } from "next";
import { cn } from "@/lib/utils";

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>("hero");

  const visibleSectionsRef = useRef<Record<string, number>>({});

  // NOTE: Consider moving this to a custom hook for better reusability
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Store the percentage of how much of this section is visible
            visibleSectionsRef.current[entry.target.id] =
              entry.intersectionRatio;
          } else {
            // Remove it completely if it leaves the screen view
            delete visibleSectionsRef.current[entry.target.id];
          }
        });

        // Find the section that occupies the largest percentage of the viewport
        let highestRatio = 0;
        let mostVisibleSectionId = "";

        Object.entries(visibleSectionsRef.current).forEach(([id, ratio]) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleSectionId = id;
          }
        });

        // Only update state if we found a valid, active section
        if (mostVisibleSectionId) {
          setActiveTab(mostVisibleSectionId);
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    // CLEANUP: Essential to prevent massive memory leaks on route changes
    return () => observer.disconnect();
  }, [setActiveTab]);

  const headerTabs = [
    { id: "hero", label: "Home" },
    { id: "about-me", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-40 w-full border-b border-sky-100 bg-sky-100 px-4 py-3 shadow-xl shadow-[rgb(224,242,254,0.5)] sm:py-4 dark:border-sky-950 dark:bg-sky-950 dark:shadow-[rgba(8,47,73,0.5)]">
      <div className="mx-auto grid max-w-360 gap-y-4 sm:grid-cols-2">
        <div className="relative flex w-full items-center justify-center sm:ml-4 sm:justify-start">
          <Link
            className="text-lg font-black text-blue-600 sm:text-xl md:text-2xl dark:text-sky-400"
            href="#"
          >
            Mehran Ghari
          </Link>
          <ModeToggle className="absolute top-0 right-0 sm:hidden" />
        </div>
        <nav className="flex items-center gap-6 sm:justify-self-end">
          <ul className="flex w-full items-center justify-around gap-2 sm:gap-6">
            {headerTabs.map((tab) => (
              <HeaderLink
                key={tab.id}
                href={`#${tab.id}`}
                isActive={activeTab === tab.id}
              >
                {tab.label}
              </HeaderLink>
            ))}
          </ul>
          <ModeToggle className="hidden sm:flex" />
        </nav>
      </div>
    </header>
  );
}

interface HeaderLinkProps {
  isActive: boolean;
  href: Route;
  children: React.ReactNode;
}
function HeaderLink({ isActive, href, children }: HeaderLinkProps) {
  return (
    <li>
      <Link
        className={cn(
          isActive ? "text-blue-600 dark:text-blue-400" : "",
          "focus-visible:border-ring focus-visible:ring-ring/50 text-sm transition-colors duration-100 hover:text-blue-600 focus-visible:ring-[3px] sm:text-base dark:hover:text-blue-400",
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
