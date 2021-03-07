module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // "modules": false,
        loose: true,
        targets: {
          browsers: [">1%", "last 2 versions", "not dead", "not ie<=10"],
          // "edge": "17",
          // "firefox": "60",
          // "chrome": "67",
          // "safari": "11.1"
        },
        useBuiltIns: "entry",
        corejs: "3",
        // "useBuiltIns": "usage"
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],

  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",

    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
      "antd",
    ],
    [
      "import",
      {
        libraryName: "@tomoyd/react-ui",
        libraryDirectory: "es",
      },
      "react-ui",
    ],
  ],
};
