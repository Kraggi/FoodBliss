import * as webpack from 'webpack';
import { BuildOptions } from './types/config';
import { Plugins } from './Plugins';
import { Loaders } from './Loaders';
import { Resolvers } from './Resolvers';
import { DevServer } from './DevServer';

export function WebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: Plugins(options),
        module: Loaders(options),
        resolve: Resolvers(options),
        devServer: isDev ? DevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        optimization: {
            runtimeChunk: 'single'
        }
    };
}
