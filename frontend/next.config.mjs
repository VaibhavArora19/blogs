/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ["cdn.hashnode.com"],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
