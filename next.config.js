module.exports = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/car-rental", destination: "/cars", permanent: true },
      { source: "/car-service", destination: "/cars", permanent: true },
      { source: "/economy.php", destination: "/cars", permanent: true },
      { source: "/suv.php", destination: "/cars", permanent: true },
    ];
  },
};
