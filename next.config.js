


module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  images: {
    domains: [
      "thrangra.sirv.com"
    ]
  }
}
