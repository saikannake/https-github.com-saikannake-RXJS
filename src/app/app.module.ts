import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { PromiseComponent } from './include/promise/promise.component';
import { ObservableComponent } from './include/observable/observable.component';
import { MapComponent } from './include/map/map.component';
import { SwitchMapComponent } from './include/switch-map/switch-map.component';
import { MergemapComponent } from './include/mergemap/mergemap.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    MapComponent,
    SwitchMapComponent,
    MergemapComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
