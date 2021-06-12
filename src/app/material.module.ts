import { NgModule } from '@angular/core';

import {
  MatCommonModule,
  MatLineModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPseudoCheckboxModule,
  MatRippleModule
} from '@angular/material/core';

import {
  FlexLayoutModule,
  GridModule
} from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    FlexLayoutModule,
    GridModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatPseudoCheckboxModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
