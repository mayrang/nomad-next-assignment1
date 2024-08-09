/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "specials-images.forbesimg.com",
      },
    ],
  },
};

export default nextConfig;
