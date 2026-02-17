import { EnvironmentEnum } from "#core/application/enum/EnvironmentEnum.js";

export class EnvironmentFacade {

    public static getEnvironment(): EnvironmentEnum {
        const env = process.env['NODE_ENV'] || EnvironmentEnum.UNDEFINED;
        return env as EnvironmentEnum;
    }
}