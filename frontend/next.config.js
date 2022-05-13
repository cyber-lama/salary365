/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
