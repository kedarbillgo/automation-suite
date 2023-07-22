/**
 * This is a logger implementation of playwright tests
 * It automatically captures logs of actions performed on the elements mentioned for the test script
 *  The logs are currently captured in asia/kolkata timezone*/

//required imports for the logger
const winston = require("winston");
const { format } = require("winston");
const { combine, timestamp, printf } = format;
const { filename, timer } = require("./time-stamp");

// created a custom timezone variable
const timezoned = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
};

module.exports = {
  logger: async (label) => {
    return winston.createLogger({
      level: process.env.NODE_ENV !== global.PRODUCTION ? "debug" : "info",
      defaultMeta: { service: "user-service" },
      format: combine(
        timestamp({ format: timezoned }),
        printf(({ level, message, timestamp }) => {
          return `${timestamp}:asia/kolkata timezone ${label} ${level}: ${message}`;
        })
      ),
      //file for saving the logs generated
      transports: [
        new winston.transports.File({
          filename: `artifacts/${timer}/logs/${filename}.log`,
          maxsize: "20MB",
        }),
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize()),
        }),
      ],
    });
  },
};
