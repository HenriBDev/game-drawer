import { Injectable } from "@angular/core";

import { LogLevelEnum } from "@ui/application/enum/LogLevelEnum";
import { environment } from "@ui/environments/environment";
import { LoggerContext } from "@ui/application/context/LoggerContext";

@Injectable({ providedIn: 'root' })
export class LoggerService {

    private readonly isEnabled: boolean;

    constructor() {
        if (environment.hasOwnProperty('enableLogging')) {
            this.isEnabled = (environment as any).enableLogging;
        }
    }

    public createLogger(callerInstance: object): Logger {
        return new Logger(this, new LoggerContext(callerInstance));
    }

    public log(context: LoggerContext, level: LogLevelEnum, message: any, ...params: any[]): void {
        if (!this.isEnabled) return;

        const timestamp = new Date().toISOString();
        const className = context.classInstance.constructor.name;
        const methodName = context.getMethodNameFromStack();
        const prefix = '' +
            `[${timestamp}] ` +
            `[${LogLevelEnum[level]}] ` +
            `[${className}${methodName === undefined ? '' : '.' + methodName}] `;

        switch (level) {
            case LogLevelEnum.DEBUG:
                console.log(prefix, message, ...params);
                break;
            case LogLevelEnum.ERROR:
                console.error(prefix, message, ...params);
                break;
        }
    }
}

export class Logger {

    constructor(
        private readonly loggerService: LoggerService,
        private readonly context: LoggerContext
    ) {}

    public debug(message: unknown, ...params: unknown[]): void {
        this.loggerService.log(
            this.context,
            LogLevelEnum.DEBUG,
            message,
            ...params
        );
    }

    public error(message: unknown, ...params: unknown[]): void {
        this.loggerService.log(
            this.context,
            LogLevelEnum.ERROR,
            message,
            ...params
        );
    }
}