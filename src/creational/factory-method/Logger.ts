interface ILogger {
    log(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string) { console.log(`[Console]: ${message}`); }
}

class FileLogger implements ILogger {
    log(message: string) { console.log(`[File]: Writing "${message}" to file...`); }
}

export abstract class LoggerCreator {
    public abstract createLogger(): ILogger;

    public logInfo(message: string) {
        const logger = this.createLogger();
        logger.log(message);
    }
}

export class ConsoleLoggerCreator extends LoggerCreator {
    public createLogger(): ILogger { return new ConsoleLogger(); }
}