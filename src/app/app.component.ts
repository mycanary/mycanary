import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ReactiveMaterial';

  constructor(
    private loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.loading.turnLoadingOn();
  }
}