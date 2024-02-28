const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //entry point for webpack
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-app.js"
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    //Defining rules for babel
                    options:
                    {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    mode: "development"
}
