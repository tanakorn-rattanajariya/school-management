const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, "src")],
      use: "babel-loader"
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack"
    });

    config.module.rules.push({
      test: /\.(s[ac]ss)$/i,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext].js"
          }
        },
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, "./.babelrc")
          }
        },
        {
          loader: "styled-jsx-css-loader"
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: () => [require("autoprefixer")]
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: dev
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.less$/,
      loader: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext].js"
          }
        },
        {
          loader: "babel-loader",
          query: { compact: false }
        },
        {
          loader: "raw-loader"
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: dev
          }
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: dev,
            javascriptEnabled: true
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [{ loader: "css-loader" }]
    });

    config.module.rules.push({
      test: /\.(jpe?g|png)$/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name]-[hash:8].[ext]"
          }
        },
        {
          loader: "url-loader",
          options: {
            fallback: "file-loader",
            publicPath: "/_next/static/images/",
            outputPath: "static/images/",
            limit: 8192
          }
        }
      ]
    });

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  }
};
