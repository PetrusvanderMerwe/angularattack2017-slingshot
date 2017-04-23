import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { StardataService } from './../stardata.service';
import { StargazeService } from './../stargaze.service';
import { Star } from "./../classes/star";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stargaze',
  templateUrl: './stargaze.component.html',
  styleUrls: ['./stargaze.component.css']
})
export class StargazeComponent implements OnInit, OnDestroy, AfterViewInit {

  stars: Observable<Star[]>;


  @ViewChild('renderCanvas') renderCanvas:ElementRef;

  constructor(private stargazeService:StargazeService, private stardataService:StardataService) { }

  ngOnInit() { 
    this.stars = this.stardataService.getStars();
  }

  ngAfterViewInit() {
    this.stars.subscribe(stars => { this.stargazeService.init(this.renderCanvas.nativeElement, stars); });
  }

  ngOnDestroy() {
  }

  mousemove(event: MouseEvent) {
    let pick: BABYLON.PickingInfo = this.stargazeService.engine.scene.pick(event.clientX, event.clientY);

    if (pick.hit) {
      //console.log('hit: ' + pick.pickedMesh.name);
    }
  }
}
