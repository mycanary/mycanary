import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add one message to log', () => {
    service.log(`test message`);
    expect(service.logs.length === 1);
    expect(service.logs.findIndex(message => message === `test message`) === 0).toBeTrue();
  });

  it('should add two messages to log', () => {
    service.log(`test message`);
    service.log(`second message`);
    expect(service.logs.length === 2);
    expect(service.logs.findIndex(message => message === `test message`) === 0).toBeTrue();
    expect(service.logs.findIndex(message => message === `second message`) === 1).toBeTrue();
  });
});
