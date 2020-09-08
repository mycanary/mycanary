import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ReactiveMaterial';

  constructor(
    private loading: LoadingService,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.loading.turnLoadingOn();
    this.logger.logObject(this);
    this.logger.warn(this.title);
  }
}