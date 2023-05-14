import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function DevServer({ port }: BuildOptions): DevServerConfiguration {
    return { open: true, port, historyApiFallback: true };
}
