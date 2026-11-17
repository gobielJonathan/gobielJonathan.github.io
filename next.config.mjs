/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint and type errors now fail the build (both pass as of the AI revamp).
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
}

export default nextConfig
