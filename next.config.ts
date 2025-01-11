// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Required for Docker builds
  experimental: {
    appDir: true,
  },
};

export default nextConfig;