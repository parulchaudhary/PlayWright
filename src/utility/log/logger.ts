//import { transports, format } from "winston";
const { format, transports } = require('winston');


export function options(scenarioName: string) {
    return {
        transports: [
            new transports.File({
                filename: `test-logs/winstonLogs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            }),
        ]
    }
};