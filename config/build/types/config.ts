export type BuildMode = 'development' | 'production';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    port: number;
    isDev: boolean;
}