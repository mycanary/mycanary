import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'ReactiveMaterial';

  constructor() { }

  ngOnInit(): void {
  }
}