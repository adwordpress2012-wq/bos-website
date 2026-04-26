/**
 * MASTER TEMPLATE: Bookos Multi-Tenant Real Estate – bookos.com.au
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "blobs.vusercontent.net" },
    ],
  },
}

export default nextConfig
