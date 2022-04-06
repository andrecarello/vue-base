module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  outputDir: "build",
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:8080", // default proxy is localhost:8080
    hot: true, // default value is TRUE
    liveReload: true, // default value is TRUE
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
  css: {},
  pluginOptions: {
    windicss: {},
  },
};
