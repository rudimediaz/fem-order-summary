const postcssConfigEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssConfigEnv({
      autoprefixer: true,
      stage: 2,
    }),
  ],
};
