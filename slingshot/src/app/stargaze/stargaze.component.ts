import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { StardataService } from './../stardata.service';
import { StargazeService } from './../stargaze.service';

@Component({
  selector: 'app-stargaze',
  templateUrl: './stargaze.component.html',
  styleUrls: ['./stargaze.component.css']
})
export class StargazeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('renderCanvas') renderCanvas:ElementRef;

  constructor(private stargazeService:StargazeService, private stardataService:StardataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.stargazeService.init(this.renderCanvas.nativeElement);
  }

  ngOnDestroy() {
  }
}
