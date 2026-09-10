import { Injectable } from "@angular/core";

import { LogLevelEnum } from "@ui/application/enum/LogLevelEnum";
import { environment } from "@ui/environments/environment";

@Injectable({ providedIn: 'root' })
export class LoggerService {

    private readonly isEnabled: boolean;

    constructor() {
        if (environment.hasOwnProperty('enableLogging')) {
            this.isEnabled = (environment as any).enableLogging;
        }
    }

    error(message: any, ...params: any[]): void {
        this.log(LogLevelEnum.ERROR, message, ...params);
    }

    debug(message: any, ...params: any[]): void {
        this.log(LogLevelEnum.DEBUG, message, ...params);
    }

    private log(level: LogLevelEnum, message: any, ...params: any[]): void {
        if (!this.isEnabled) return;

        const timestamp = new Date().toISOString();
        const prefix = `[${timestamp}] [${LogLevelEnum[level]}]`;

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
