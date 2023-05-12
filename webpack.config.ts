import * as path from "path";
import * as webpack from "webpack";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || 'development';
    const port = env.port || 3000

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: paths.html }),
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: 'inline-source-map',
        devServer: {
            open: true,
            port
        },
        optimization: {
            runtimeChunk: 'single'
        }
    }
}