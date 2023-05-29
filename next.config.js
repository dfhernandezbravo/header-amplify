/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'headerFooter',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './header': './src/pages/header/index.tsx',
          './footer': './src/presentation/components/layouts/footer/index.tsx',
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
