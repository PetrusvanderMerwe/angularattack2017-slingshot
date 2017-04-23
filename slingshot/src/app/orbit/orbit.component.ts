import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { OrbitService } from './../orbit.service';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.css']
})
export class OrbitComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('renderCanvas') renderCanvas:ElementRef;

  constructor(private orbitService:OrbitService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.orbitService.init(this.renderCanvas.nativeElement);
  }

  ngOnDestroy() {
  }
}
