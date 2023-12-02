/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-bootstrap"], // akan mengoptimalkan import react-bootstrap
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
