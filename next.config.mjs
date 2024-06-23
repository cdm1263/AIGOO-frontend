/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aigooback.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
