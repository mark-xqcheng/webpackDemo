"use strict";
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配js文件
        use: "babel-loader", // 用于将ES6等高级语法解析成ES5语法
      },
    ],
  },
};
