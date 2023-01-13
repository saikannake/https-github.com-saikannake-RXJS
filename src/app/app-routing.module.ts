import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PromiseComponent } from './include/promise/promise.component';
import { ObservableComponent } from './include/observable/observable.component';
import { MapComponent } from './include/map/map.component';
import { MergemapComponent } from './include/mergemap/mergemap.component';
import { SwitchMapComponent } from './include/switch-map/switch-map.component';

const routes: Routes = [
  // { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'mergemap', component: MergemapComponent },
  { path: 'switchmap', component: SwitchMapComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
