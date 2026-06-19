import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const nextConfig = {
  // ============================================
  // 🚀 CORE PERFORMANCE SETTINGS
  // ============================================

  // experimental: {
  // reactCompiler: true,
  // cssChunking: "strict",
  // inlineCss: true,
  // serverComponentsHmrCache: true,
  // isolatedDevBuild: true,

  // These are advanced, experimental features. For a portfolio site,
  // they are generally not required unless you need a specific optimization.
  // optimizePackageImports: [
  //   "lucide-react",
  //   "@icons-pack/react-simple-icons",
  //   "@radix-ui",
  // ],
  // },

  // Cache Components (replaces PPR)
  // cacheComponents: true, // optional advanced flag; disable until you need it

  // ============================================
  // 📦 BUNDLE OPTIMIZATION
  // ============================================

  serverExternalPackages: ["sharp", "canvas"],

  // ============================================
  // 🖼️ IMAGE OPTIMIZATION
  // ============================================

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },

  // ============================================
  // 🔒 SECURITY
  // ============================================

  poweredByHeader: false,
  compress: true,
  generateEtags: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },

  // ============================================
  // 🎯 TYPESCRIPT & ROUTING
  // ============================================

  typescript: {
    ignoreBuildErrors: false,
  },

  // typedRoutes: true, // only use this if your project relies on typed route generation

  // ============================================
  // 📊 LOGGING & DEBUGGING
  // ============================================

  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },

  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
