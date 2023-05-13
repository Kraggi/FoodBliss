import webpack from 'webpack';

export function Loaders(): webpack.ModuleOptions {
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return {
        rules: [typescriptLoader]
    };
}
