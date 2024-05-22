/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const popularURI = `headerFooter@http://localhost:3001/_next/static/${location}/remoteEntry.js`;
  return {
    popularURI,
  };
};

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
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    removeConsole: true,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'headerFooter',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {
          './header': './src/presentation/modules/header/index.tsx',
          './footer': './src/presentation/modules/footer/index.tsx',
          './popular': './src/pages/api/products/search/popular.ts',
          './location':
            './src/presentation/modules/header/sections/header-location/index.tsx',
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
