module.exports = {
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-proposal-object-rest-spread",
    "emotion",
  ],
  presets: [
    "module:@babel/preset-react",
    ["module:@babel/preset-env", {
      targets: {
        browsers: ["last 3 versions"],
      }
    }],
  ],
};
