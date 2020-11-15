/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from "path";

import dotenv from "dotenv";

import {parseArguments} from "./helpers";

const parsedArguments = parseArguments();
export const mode = parsedArguments.mode ?? "production";
export const isDevServer = parsedArguments.isDevServer ?? false;
export const isProd = mode === "production";
export const isDev = !isProd;
export const rootDir = join(__dirname, "../../");
export const webpackDir = join(__dirname, "../");
export const envVars = dotenv.config({path: join(rootDir, "configs/.env")})
  .parsed;
