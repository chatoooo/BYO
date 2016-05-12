import path from 'path';
import webpack from 'webpack';

export default {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: [path.resolve(__dirname, "src", "app.js"), "webpack/hot/dev-server"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js'],
        root: path.resolve(__dirname, "src")
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
