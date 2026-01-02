/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger as PinoInstance, pino } from "pino";

import { Logger } from "./logger.interface.js";

export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    this.logger = pino();
  }

  public debug(message: string, ...args: any[]): void {
    this.logger.debug(message, ...args);
  }

  public error(message: string, error: Error, ...args: any[]): void {
    this.logger.error(error, message, ...args);
  }

  public info(message: string, ...args: any[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: any[]): void {
    this.logger.warn(message, ...args);
  }
}
