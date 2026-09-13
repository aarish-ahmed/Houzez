/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '30mb', // Increase this based on your expected image sizes
    },
  },
};

export default nextConfig; // or module.exports = nextConfig; depending on your setup