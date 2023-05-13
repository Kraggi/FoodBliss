import * as path from 'path';
import * as webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { WebpackConfig } from './config/build/WebpackConfig';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    };
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development';

    return WebpackConfig({ paths, mode, port, isDev });
};
