import {getEnv, requireEnv} from './lib/env';
export {EnvironmentVariableNotFoundError} from "./lib/error"

export const env = {
    get: getEnv,
    require: requireEnv
}