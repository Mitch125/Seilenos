const path = require("path");

module.exports = {
    target: "web",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    // webpack-dev-server configuration
    devServer: {
        contentBase: "./dist",
        watchContentBase: true,
        compress: true,
        port: 9001
    }
};
