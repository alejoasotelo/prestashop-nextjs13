/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ["www.jsdev.it", process.env.IMAGES_DOMAIN],
  },
};

module.exports = nextConfig;
