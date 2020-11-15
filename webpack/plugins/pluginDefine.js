import {DefinePlugin} from "webpack";

import {envVars} from "../utils/env";
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @example
 * const config = {
 *     isProd: true
 * }
 */
import {isDev, isDevServer, isProd, mode} from "../utils/env";

const config = {
  "process.env": {
    NODE_ENV: JSON.stringify(mode),
  },
  IS_PROD: isProd,
  IS_DEV: isDev,
  IS_DEV_SERVER: isDevServer,
};

if (envVars) {
  Object.keys(envVars).forEach((key) => {
    config[`process.env.${key}`] = JSON.stringify(envVars[key]);
  });
}

export const definePlugin = new DefinePlugin(config);
