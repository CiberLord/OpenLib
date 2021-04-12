const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env,argv) => {
    const modeEnv = argv.mode||'development';

    return {
        mode: modeEnv,
        entry: ["@babel/polyfill", "./src/index.tsx"],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].[hash].js",

        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        devtool: 'source-map',
        devServer: {
            port: 8000,
            contentBase: __dirname + 'dist',
            hot: true,
            watchContentBase: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./public/index.html" }),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(css)$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(jpg|jpeg|png|svg)/,
                    use: ["file-loader"]
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: { loader: "ts-loader" }
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }

}