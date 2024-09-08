/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.officewarehouse.com.ph',
      'dynamic.zacdn.com',
      'oneclick.ph',
      'i.ebayimg.com',
    ],
  },
};

export default nextConfig;