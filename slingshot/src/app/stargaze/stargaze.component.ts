import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { BabylonService } from './../babylon.service';
import { StardataService } from './../stardata.service';

@Component({
  selector: 'app-stargaze',
  templateUrl: './stargaze.component.html',
  styleUrls: ['./stargaze.component.css']
})
export class StargazeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('renderCanvas') renderCanvas:ElementRef;

  constructor(private babylonService:BabylonService, private stardataService:StardataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.babylonService.init(this.renderCanvas.nativeElement);
    this.babylonService.setupTestScene();
  }

  ngOnDestroy() {
  }
}
