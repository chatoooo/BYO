var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: [path.resolve(__dirname, "src", "app.js"), "webpack/hot/dev-server"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js'],
        root: path.resolve(__dirname, "src")
    }
};
