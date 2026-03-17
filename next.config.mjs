// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 开启 React 严格模式
  swcMinify: true,       // 使用 SWC 压缩代码
  images: {
    domains: [
      'images.unsplash.com', // 允许加载 Unsplash 的图片
    ],
  },
  env: {
    // 你可以在这里声明环境变量（可选）
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    // 这里不要写 appDir，Next 14 已经默认支持 App Router
  },
}

export default nextConfig