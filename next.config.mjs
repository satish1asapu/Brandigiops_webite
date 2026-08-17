import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Pin the app root so builds are not written to the parent folder. */
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  /** Hide the dev-only bubble (Route / Bundler / preferences) in the corner. */
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [140, 200, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/growth-intelligence-suite",
        destination: "/growth-radar",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            // No includeSubDomains until www DNS exists (audit T17).
            value: "max-age=63072000; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
