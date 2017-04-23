import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OrbitComponent } from './orbit/orbit.component';
import { StargazeComponent } from './stargaze/stargaze.component';
import { StardataService } from './stardata.service';
import { StartableComponent } from './startable/startable.component';
import { StargazeService } from './stargaze.service';
import { OrbitService } from './orbit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdProgressBarModule, MdCardModule } from '@angular/material';
import 'hammerjs';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';
import { FetchingdataComponent } from './fetchingdata/fetchingdata.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OrbitComponent,
    StargazeComponent,
    StartableComponent,
    FetchingdataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdProgressBarModule, 
    MdCardModule,
    AppRoutingRoutingModule
  ],
  providers: [StardataService, StargazeService, OrbitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
