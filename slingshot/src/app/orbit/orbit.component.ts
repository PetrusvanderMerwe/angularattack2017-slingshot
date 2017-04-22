import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { BabylonService } from './../babylon.service'

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.css']
})
export class OrbitComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('renderCanvas') renderCanvas:ElementRef;

  constructor(private babylonService:BabylonService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.babylonService.init(this.renderCanvas.nativeElement);
    this.babylonService.setupTestScene();
  }

  ngOnDestroy() {
  }
}
