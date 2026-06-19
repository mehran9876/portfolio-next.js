# High-Performance Developer Portfolio

A production-ready, highly optimized personal portfolio built with a strict focus on frontend performance engineering, fluid motion logic, and accessible user experiences.

This project serves as both a professional showroom and a practical demonstration of modern browser optimization techniques, maintaining smooth rendering paths and strict layout integrity.

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router)
- **Styling & Design System:** Tailwind CSS
- **Component Foundations:** Radix UI Primitives (unstyled, fully accessible)
- **Motion:** Custom CSS Animations

---

## ⚡ Engineering & Performance Highlights

This portfolio was built with a "performance-first" mindset, prioritizing runtime efficiency and fluid interactions over heavy, unoptimized UI libraries.

### 1. Frame-Drop Minimization & Scroll Optimization

- **Intersection Observer Orchestration:** Rather than relying on heavy scroll-listener libraries that trigger continuous main-thread recalculations, this project utilizes the native browser `IntersectionObserver` API.
- **Lazy-Loading & Asset Deferral:** Components, heavy assets, and scroll-driven entry animations are strictly deferred and mounted dynamically only when entering the viewport. This completely eliminates layout thrashing and guarantees a stable 60fps scrolling experience.

### 2. Accessible-First Architecture (A11y)

- **Radix UI Primitives:** Built using unstyled Radix primitives to enforce robust WAI-ARIA compliance, semantic HTML markup, and full keyboard navigation safety out of the box.
- **Custom Design Execution:** By avoiding rigid pre-styled component frameworks, the custom styling layer (Tailwind CSS) interacts directly with accessible primitives, keeping the DOM tree clean and lightweight.

### 3. Maintainable Component Architecture

- **Separation of Concerns:** Animation states, state management, and semantic layout blocks are decoupled. Logic governing viewport tracking is isolated into reusable React hooks, ensuring the codebase remains modular, predictable, and highly scalable.

---

## 💎 Key Features

- **Fluid Hero Section:** Implements smooth, performance-optimized scroll-driven entry animations.
- **Dynamic Projects Showcase:** Clean interface highlighting key software engineering projects with deep-dives into technical problem-solving.
- **Interactive Skills Matrix:** A cleanly categorized presentation of the toolset, framed around execution speed and real-world utility.
- **Fully Responsive & Accessible Layout:** Semantically structured for seamless navigation across all device viewports, screen readers, and keyboard-only layouts.

---

## 📁 Project Structure

The project follows a modular, feature-based directory structure to isolate presentation layers from core browser optimization logic:

    ├── public/             # Optimized static assets and icons
    ├── src/
    │   ├── app/            # Next.js App Router pages and layout configurations
    │   │   ├── layout.tsx  # Global providers, metadata, and fonts setup
    │   │   └── page.tsx    # Core portfolio entry point
    │   ├── components/     # Reusable UI architecture
    │   │   ├── ui/         # Accessible primitives (Radix + Tailwind composition)
    │   │   ├── Hero.tsx    # Hero section with optimized scroll entry
    │   │   ├── About.tsx   # Semantic biography interface
    │   │   ├── Projects.tsx# Projects matrix and case-study layout
    │   │   └── Skills.tsx  # Performance-oriented skills grid
    │   ├── hooks/          # Custom hooks (e.g., useIntersectionObserver)
    │   └── styles/         # Global CSS and custom animation keyframes
    ├── tailwind.config.js  # Tokenized layout utilities and animation definitions
    └── tsconfig.json       # Strict TypeScript configuration

---

## 📊 Performance Metrics

Designed to meet strict web vitals baselines. Production builds maintain near-perfect scores across the board:

| Metric             | Target | Focus Area                                                            |
| :----------------- | :----- | :-------------------------------------------------------------------- |
| **Performance**    | 98-100 | Zero layout thrashing, deferred animations, asset optimization        |
| **Accessibility**  | 100    | Full keyboard trapping, aria attributes via Radix, semantic tags      |
| **Best Practices** | 100    | Clean dependency footprint, secure cross-origin anchor configurations |
| **SEO**            | 100    | Statically generated metadata, optimal document outline structure     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm / pnpm / yarn

### Installation & Local Development

1. Clone the repository:
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

Open `http://localhost:3000` in your browser to view the site.

### Production Build

To generate a fully static, highly optimized production build:
npm run build
npm run start

---

## 📐 Development Workflow

Developed locally using a highly streamlined, keyboard-driven environment leveraging granular Git workflows for isolated component updates and clean version histories.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
