import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BabylonService } from './babylon.service';
import { OrbitComponent } from './orbit/orbit.component';
import { StargazeComponent } from './stargaze/stargaze.component';
import { StardataService } from './stardata.service';

@NgModule({
  declarations: [
    AppComponent,
    OrbitComponent,
    StargazeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BabylonService, StardataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
