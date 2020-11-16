const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = withBundleAnalyzer(nextConfig);
