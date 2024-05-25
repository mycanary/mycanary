// Simply to import to app.module.ts and start to use all angular
// by this way is easier to maintenance you app.module

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [],
  providers: [],
  declarations: [],
  bootstrap: [],
  exports: [
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatStepperModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSortModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
