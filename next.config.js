const path = require("path");
const withImages = require("next-images");

module.exports = (phase, { defaultConfig }) => {
  return withImages({
    env: {
      serverHost: process.env.SERVER_HOST,
    },
    reactStrictMode: true,
    images: {
      // domains: ["skate.ru"],
      deviceSizes: [414, 600, 1200],
      loader: "imgix",
      path: process.env.SERVER_HOST,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
  });
};
