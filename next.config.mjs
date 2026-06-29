/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Hide the dev-only bubble (Route / Bundler / preferences) in the corner. */
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [140, 200, 256, 384],
  },
};

export default nextConfig;
