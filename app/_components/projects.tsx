import * as React from "react";
import ProjectDialog from "@/app/_components/projects-dialoge";
import {
  SiCss,
  SiDatefns,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReacttable,
  SiResend,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

export type Project = {
  id: string;
  image: {
    cardSrc?: string;
    cardAlt?: string;
    src: string;
    alt: string;
    aspectRatio: number;
  };
  title: string;
  cardDesc: string;
  shortInfo: string;
  fullInfo: string | React.ReactNode;
  techStack: { name: string; icon: React.ReactNode | string }[];
  unfinished?: boolean;
  inProgress?: boolean;
  demo?: React.ReactNode;
  component?: React.ReactNode;
};

const projectsDummyData: Project[] = [
  {
    inProgress: true,
    id: "autoparts-shop",
    image: {
      src: "/auto-parts-admin-dashboard.webp",
      alt: "Auto parts admin finance panel",
      aspectRatio: 1.321,
    },
    title: "Autoparts E-Commerce & Analytics Platform",
    cardDesc:
      "A secure e-commerce application and financial dashboard engineered with Next.js and Supabase RBAC.",
    shortInfo: `A high-performance full-stack e-commerce ecosystem featuring a server-optimized customer storefront and a secure financial analytics panel. Built with Next.js and Supabase, the architecture leverages an edge-level proxy for JWT-based Role-Based Access Control (RBAC), complex data manipulation via headless TanStack Tables, and an isolated API boundary using Server Actions to ensure a clean future migration to a custom microservice backend.`,
    fullInfo: (
      <div>
        <p className="mb-4">
          This project is a full-stack e-commerce platform designed to handle
          complex automotive parts inventories across diverse categories.
          Developed in a two-contributor workflow, my role centered on
          establishing a highly secure administrative infrastructure, optimizing
          data density for business analytics, and decoupling the data-fetching
          layer to allow the application to remain completely backend-agnostic.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Edge-Level Proxying & JWT Authentication
        </h4>
        <p className="mb-4">
          To protect sensitive business metrics, the administrative backend is
          shielded behind rigid Role-Based Access Control (RBAC). Rather than
          relying solely on flimsy client-side route guards, I configured a
          Next.js proxy layer that inspects cryptographically secure{" "}
          <code>JWT</code> claims on incoming requests. This ensures that
          malicious actors cannot bypass route limits or intercept
          administrative api endpoints, moving authorization checking right to
          the application boundary.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Data Density & Headless Tables for Financial Analytics
        </h4>
        <p className="mb-4">
          The admin panel functions as a high-throughput financial center
          tracking real-time sales velocity, user management, and undelivered
          orders. To maintain optimal rendering speeds with thousands of data
          rows, I implemented a headless data layer using
          <code>TanStack Tables</code>. This framework allowed me to build
          granular client-side sorting, multi-column fuzzy search filters, and
          lightweight pagination states directly into our custom UI primitives
          without introducing bloated, un-stylable component libraries.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Decoupled Backend Readiness via Server Actions
        </h4>
        <p className="mb-4">
          While the application currently uses Supabase as its primary
          datastore, I purposely architected our data mutations using Next.js
          Server Actions. By treating Server Actions as an isolated abstraction
          layer for our CRUD operations, the frontend code remains completely
          decoupled from Supabase-specific client SDKs. This strategic isolation
          provides an incredibly straightforward migration path when
          transitioning the data layer to an independent custom backend.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Server-First Component Architecture
        </h4>
        <p className="mb-4">
          To maximize both Search Engine Optimization (SEO) for product
          discovery and core user experience metrics, the client storefront
          drastically minimizes the use of interactive Client Components.
          Product catalogs, multi-category navigation links, and search page
          layouts are server-rendered out of the box, reducing client JavaScript
          execution time and ensuring near-instantaneous initial load speeds for
          better consumer retention.
        </p>
        <hr className="border-muted my-6" />
        <h4 className="text-primary mb-2 text-lg font-semibold">
          Key Lessons Learned
        </h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>Edge Proxy Configurations:</strong> Gained hands-on
            experience setting up architectural proxies and decoding JWT states
            at the network edge to properly enforce secure, server-side RBAC
            validation.
          </li>
          <li>
            <strong>Headless UI Mastery:</strong> Overcame previous friction
            working with complex web tables by deep-diving into TanStack Tables,
            realizing how abstraction libraries solve advanced search and
            sorting problems natively.
          </li>
          <li>
            <strong>Defensive Testing Awareness:</strong> Building out critical
            financial boundaries highlighted the immediate necessity for
            absolute reliability, providing a strong business case for
            implementing robust automated testing pipelines.
          </li>
        </ul>
        <h4 className="text-primary mb-2 text-lg font-semibold">Next Steps</h4>
        <p className="mb-2">
          <strong>Custom Microservice Backend:</strong> I am planning to replace
          the current Supabase implementation by building a dedicated, highly
          concurrent microservice backend using Node.js or Go alongside a raw
          PostgreSQL database to maximize API performance.
        </p>
        <p className="mb-2">
          <strong>Comprehensive Unit Testing:</strong> My immediate next
          objective is to fully adopt a robust unit-testing suite across our
          Server Actions and authorization hooks to shorten the manual testing
          phase and lock down application regression vectors.
        </p>
      </div>
    ),
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "TanStack Tables", icon: <SiReacttable /> },
    ],
  },

  {
    id: "vessel-charter-nexus", // Completely custom ID
    image: {
      cardSrc: "/nexus-fleet-home.webp",
      cardAlt: "Fleet booking client application",
      src: "/nexus-fleet-cabins.webp",
      alt: "Operations management panel",
      aspectRatio: 1.17,
    },
    title: "Nexus Charters: Fleet Ecosystem", // Sounds like an enterprise product
    cardDesc:
      "A dual-app maritime rental ecosystem featuring a Next.js client storefront and a React operations dashboard.",
    shortInfo: `A comprehensive fleet management and booking ecosystem comprised of two distinct applications. The customer-facing side is a high-performance Next.js app featuring interactive calendar bookings, Server Actions, and optimized SEO. The internal management side is a robust React SPA operations panel built to handle vessel inventory, crew assignments, and charter check-in workflows with real-time feedback.`,
    fullInfo: (
      <div>
        <p className="mb-4">
          Nexus Charters is a dual-application software ecosystem designed to
          automate luxury vessel rentals. This project represents a major
          milestone in my development journey, transitioning from standard
          client-side React architectures to deploying decoupled,
          production-grade Next.js systems communicating with a shared backend.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          The Architecture: React SPA + Next.js SSR
        </h4>
        <p className="mb-4">
          To optimize the platform&apos;s operational efficiency, I separated
          the codebase into two distinct repositories. The internal operations
          panel was built as a React Single Page Application (SPA)—providing a
          zero-overhead environment for logistics staff to manage data-dense
          scheduling tables and vessel configurations. For the public
          storefront, I utilized Next.js to maximize SEO positioning, user
          conversion loops, and initial page load speeds through Server-Side
          Rendering (SSR).
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Next.js Client & Dynamic Scheduling Logic
        </h4>
        <p className="mb-4">
          On the storefront, I engineered an interactive reservation engine
          where users can select booking windows on a custom calendar interface,
          dynamically filtering out unavailable charter slots based on real-time
          database concurrency checks. Managing these mutations required
          leveraging modern Next.js paradigms: I utilized Server Actions for
          secure data processing and implemented precise cache revalidation tags
          to ensure that static marketing pages reflect inventory changes
          immediately upon booking.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Operations Panel & Real-Time Logistics Feedback
        </h4>
        <p className="mb-4">
          Backed by Supabase, the administrative portal automates the entire
          charter lifecycle, including handling vessel handoffs and return
          checklists. To ensure operational precision for administrative staff,
          I integrated a contextual toast notification architecture, providing
          instantaneous, hardware-accelerated visual feedback for every critical
          database mutation, form state change, or system error event.
        </p>
      </div>
    ),
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Date-fns", icon: <SiDatefns /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
    ],
  },

  // {  //   id: "world-wise",  //   image: {  //     src: "/wild-oasis.png",  //     alt: "World Wise interactive travel tracking application preview",  //   },  //   title: "World Wise",  //   cardDesc:  //     "An interactive React travel tracking application powered by Leaflet maps",  //   shortInfo: `A dynamic React application that allows travel enthusiasts to track their journeys globally. Features an interactive map integration where users can click to log visited cities and countries, record personal experiences, and preserve their travel memories.`,  //   fullInfo: (  //     <div>  //       <p className="mb-4">  //         World Wise is a frontend React application designed for travelers who  //         want to keep a visual diary of their global adventures. The core  //         experience centers around an immersive, interactive map that  //         transforms geographic location data into a personal travel log.  //       </p>  //  //       <h4 className="mb-2 text-lg font-semibold">  //         Interactive Mapping & Geolocation  //       </h4>  //       <p className="mb-4">  //         Using the Leaflet library, I integrated a highly responsive map  //         interface. I implemented advanced click-to-track behavior: when a user  //         clicks anywhere on the map, the application captures the precise GPS  //         coordinates. It then uses reverse geocoding to automatically fetch the  //         city name, country, and corresponding flag emoji, allowing users to  //         effortlessly log their exact location alongside a custom journal entry  //         about their experience.  //       </p>  //       <h4 className="mb-2 text-lg font-semibold">  //         State Management via the URL  //       </h4>  //       <p className="mb-4">  //         A key technical highlight of this project was using React Router not  //         just for page navigation, but as a primary state management tool. By  //         storing the map&apos;s current coordinates (latitude and longitude)  //         and selected city data directly inside the URL query string, I ensured  //         that the application state remains perfectly synchronized, making user  //         bookmarks and browser navigation completely seamless.  //       </p>  //       <h4 className="mb-2 text-lg font-semibold">  //         Modular Styling & Performance  //       </h4>  //       <p className="mb-4">  //         The application was bundled using **Vite** for blazing-fast  //         development and optimized build speeds. To keep the user interface  //         maintainable and scalable, I utilized CSS Modules, which provided  //         scoped, component-level styling and eliminated global style conflicts  //         while ensuring a clean, modern aesthetic.  //       </p>  //     </div>  //   ),  //   techStack: [  //     { name: "React", icon: <SiReact /> },  //     { name: "Leaflet", icon: <SiLeaflet /> },  //     { name: "Vite", icon: <SiVite /> },  //     { name: "React Router", icon: <SiReactrouter /> },  //     { name: "CSS Modules", icon: <SiCssmodules /> },  //   ],  // },
  {
    id: "portfolio",
    image: {
      src: "/portfolio-split.webp",
      alt: "Personal portfolio website preview",
      aspectRatio: 0.472,
    },
    title: "Personal Portfolio",
    cardDesc:
      "A high-performance single-page portfolio engineered with Next.js static rendering and Radix primitives.",
    shortInfo: `A fast, sleek, and highly optimized single-page developer portfolio built using Next.js, Tailwind CSS, and shadcn/ui. Focused heavily on rendering efficiency, leveraging Intersection Observers for layout tracking, and utilizing hybrid server/client component architecture for near-instantaneous load times.`,
    fullInfo: (
      <div>
        <p className="mb-4">
          This project is the very portfolio website you are exploring right
          now. It serves as a practical demonstration of my front-end
          engineering principles, prioritizing technical efficiency, clean
          modular code, and robust accessibility as the foundation of the user
          experience.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Architecture & Static Performance
        </h4>
        <p className="mb-4">
          To ensure an optimal user experience and fast First Contentful Paint
          (FCP), the portfolio is designed as a single-page application
          leveraging Next.js static page generation. By strictly isolating
          interactivity, only components that absolutely require user state are
          designated as Client Components, maximizing the efficiency of the
          server-rendered skeleton.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Fluid Layouts & Lazy Lifecycle via IntersectionObserver
        </h4>
        <p className="mb-4">
          To keep the UI fluid and prevent frame drops, I avoided expensive
          global scroll event listeners. Instead, I leveraged the modern browser
          IntersectionObserver API wrapped within modular React hooks to serve
          two distinct architectural roles: managing viewport lazy-loading for
          non-critical sections, and handling high-performance conditional
          rendering. For instance, inside the project modal interface, an
          observer dynamically toggles the contextual scroll-down button based
          on whether the main description block has moved out of the active
          viewport bounds.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Dynamic CSS Project Interface Showcases
        </h4>
        <p className="mb-4">
          Rather than introducing bloated JavaScript parallax scroll libraries
          or heavy video background elements to show off project interfaces, I
          engineered an asset-optimized visual reel using pure CSS. By combining
          a single vertical capture of the application with smooth
          hardware-accelerated transitions on the <code>object-position</code>
          attribute, the portfolio achieves a flawless auto-scrolling preview
          effect. To ensure uniform scrolling velocity across varying project
          layout lengths, the specific animation duration is calculated
          dynamically based on the image aspect ratio and injected directly into
          the DOM using inline CSS custom properties.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Structured Component Foundations
        </h4>
        <p className="mb-4">
          To maintain a coherent design system while maximizing development
          velocity, components were built on top of shadcn/ui. Choosing this
          paradigm ensures a highly customizable stepping stone because it
          utilizes Radix UI primitives under the hood. This guarantees full
          keyboard navigation, robust screen reader accessibility, and smooth
          layout transitions right out of the box.
        </p>
        <h4 className="mb-2 text-lg font-semibold">
          Serverless Contact Workflow
        </h4>
        <p className="mb-4">
          The contact subsystem is backed by a secure full-stack workflow. I
          utilized Next.js Server Actions to process form data safely on the
          server side without exposing private API keys to the client.
          Submissions connect directly to the Resend API, validating client
          inquiries instantaneously and delivering them straight to my inbox
          with minimal overhead.
        </p>
        <hr className="border-muted my-6" />
        <h4 className="text-primary mb-2 text-lg font-semibold">
          Key Lessons Learned
        </h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>Multipurpose Observers:</strong> Gained deep practical
            familiarity with the IntersectionObserver API, moving past simple
            scroll triggers to handle architectural tasks like conditional UI
            rendering and viewport lazy-loading.
          </li>
          <li>
            <strong>Full-Stack Contact Workflows:</strong> Integrated the Resend
            email infrastructure for the first time, establishing a clear mental
            model of how user-submitted contact data is securely handled between
            client state, server actions, and third-party APIs.
          </li>
          <li>
            <strong>Independent UI/UX Execution:</strong> This marked my first
            project handling the entire layout layout independently,
            successfully putting core design principles regarding typography,
            visual hierarchy, and whitespace into practice.
          </li>
          <li>
            <strong>The Value of Documentation:</strong> Reflecting on past
            builds to write this portfolio taught me firsthand how vital clear
            documentation is, helping me identify exactly what context and
            metrics are critical to record during development.
          </li>
          <li>
            <strong>Purpose-Driven Animation:</strong> Designing my first custom
            CSS animation reinforced a key workflow step: analyze the desired
            target behavior completely before writing code, then select the
            precise, lightweight CSS properties required to execute it cleanly.
          </li>
        </ul>
        <h4 className="text-primary mb-2 text-lg font-semibold">Next Steps</h4>
        <p className="mb-2">
          <strong>Interactive Previews:</strong> I am working on deploying
          dedicated live demo environments for my showcased applications to let
          visitors test and explore the implementations directly.
        </p>
      </div>
    ),
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Resend", icon: <SiResend /> },
      { name: "CSS Variables", icon: <SiCss /> },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section flex w-8/10 max-w-350 scroll-mt-24 flex-col items-center pt-5 text-sm sm:mb-4 sm:scroll-mt-10 sm:pb-8 sm:text-base md:pt-22 lg:w-9/10"
    >
      <h3 className="fancy-text mb-6 bg-linear-to-r text-center text-3xl font-extrabold text-transparent sm:text-start sm:text-4xl">
        My latest projects
      </h3>
      <p className="mb-4 sm:mb-10">Here are some of my latest projects</p>
      <div className="grid w-full gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projectsDummyData.map((project) => (
          <ProjectDialog key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
