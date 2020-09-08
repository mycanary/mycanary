import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: Array<string> = [];

  constructor() { }

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
