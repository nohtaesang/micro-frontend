const webpack = require("webpack");
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const packageJsonDeps = require("./package.json").dependencies;
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new ModuleFederationPlugin({
          remotes: {
            remoteAppWebpack: "remoteAppWebpack@http://localhost:3001/remoteAppWebpackEntry.js",
          },
          shared: {
            react: {
              eager: true,
              requiredVersion: packageJsonDeps["react"],
              singleton: true,
            },
            "react-dom": {
              eager: true,
              requiredVersion: packageJsonDeps["react-dom"],
              singleton: true,
            },
          },
        }),
      ],
    };
  },
};
