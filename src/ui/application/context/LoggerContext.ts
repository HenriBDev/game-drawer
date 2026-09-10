export class LoggerContext {

    classInstance: object;

    constructor(classInstance: object) {
        this.classInstance = classInstance;
    }

    public getMethodNameFromStack(): string | undefined {

        const stack = new Error().stack;
        console.log(stack)
        if (!stack) {
            return undefined;
        }

        const className = this.classInstance.constructor.name;

        const classMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(this.classInstance))
            .filter((methodName) => methodName !== 'constructor');

        const stackLines = stack.split('\n');

        for (const line of stackLines) {
            if (!line.includes(className)) {
                continue;
            }

            for (const methodName of classMethods) {
                if (line.includes(`.${methodName}`)) {
                    return methodName;
                }
            }
        }
        return undefined;
    }
}