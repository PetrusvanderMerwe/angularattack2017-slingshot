import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchingdataComponent } from '../fetchingdata/fetchingdata.component'
import { StargazeComponent } from '../stargaze/stargaze.component'

const routes: Routes = [
  {
    path: 'fetching',
    component: FetchingdataComponent
  },
  {
    path: 'stargaze',
    component: StargazeComponent
  },
  { path: '',   redirectTo: '/fetching', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]

})
export class AppRoutingRoutingModule { }
