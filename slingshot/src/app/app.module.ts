import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BabylonService } from './babylon.service';
import { OrbitComponent } from './orbit/orbit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BabylonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
