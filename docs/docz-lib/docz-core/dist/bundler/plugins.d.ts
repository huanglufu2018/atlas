import Config from 'webpack-chain';
import { Config as Args, Env } from '../config/argv';
export declare const assets: (config: Config, args: Args, env: Env) => void;
export declare const analyzer: (config: Config) => void;
export declare const injections: (config: Config, args: Args, env: Env) => void;
export declare const ignore: (config: Config) => void;
export declare const hot: (config: Config) => void;
export declare const html: (config: Config, args: Args, env: Env) => Promise<void>;
export declare const webpackBar: (config: Config, args: Args) => void;
export declare const watchNodeModulesPlugin: (config: Config) => void;
export declare const notFoundPlugin: (config: Config) => void;
