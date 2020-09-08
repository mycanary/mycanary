import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: Array<string> = [];
  warnings: Array<string> = [];
  errors: Array<string> = [];

  constructor() { }

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  warn(message: string) {
    this.warnings.push(message);
    console.warn(message);
  }

  error(message: string) {
    this.errors.push(message);
    console.error(message);
  }

  logObject(message: object) {
    console.log({ message });
  }
}
