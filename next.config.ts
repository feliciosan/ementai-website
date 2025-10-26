import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de performance
  experimental: {
    optimizeCss: true, // Otimização de CSS
    optimizePackageImports: ["lucide-react"], // Otimizar imports de ícones
  },

  // Compressão
  compress: true,

  // Otimização de imagens
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
