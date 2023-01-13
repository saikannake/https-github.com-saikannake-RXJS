import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { PromiseComponent } from './include/promise/promise.component';
import { ObservableComponent } from './include/observable/observable.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './include/map/map.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    MapComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
