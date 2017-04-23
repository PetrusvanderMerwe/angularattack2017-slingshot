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
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    OrbitComponent,
    StargazeComponent,
    StartableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [StardataService, StargazeService, OrbitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
