import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Components } from './components';
import { Pipes } from './pipes';
import { Services } from './services';

import {
  RouteComponents,
  Routes
} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Pipes,
    ...RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
