/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
  transpilePackages: ['three'],

async redirects() {
  return [
    {
      source: '/ancestral-\\(r\\)evocations-tate-modern',
      destination: '/projects/ancestral-%28r%29evocations-tate-modern',
      permanent: true,
    },
    {
      source: '/beyond-prompts',
      destination: '/projects/beyond-prompts',
      permanent: true,
    },
    {
      source: '/the-crypt',
      destination: '/projects/the-crypt',
      permanent: true,
    },
  ];
}
};

export default nextConfig;