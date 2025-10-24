/** @type {import("next").NextConfig} */
module.exports = {
  // Next.js 16 uses Turbopack by default
  turbopack: {
    // Empty config to enable Turbopack without warnings
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  typescript: { ignoreBuildErrors: true },
}
