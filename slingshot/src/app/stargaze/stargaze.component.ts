import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { StardataService } from './../stardata.service';
import { StargazeService } from './../stargaze.service';
import { Star } from "./../classes/star";
import { Observable } from 'rxjs';
import { StarinfoComponent  } from '../starinfo/starinfo.component'

@Component({
  selector: 'app-stargaze',
  templateUrl: './stargaze.component.html',
  styleUrls: ['./stargaze.component.css']
})
export class StargazeComponent implements OnInit, OnDestroy, AfterViewInit {
  stars: Observable<Star[]>;
  @ViewChild('renderCanvas') renderCanvas:ElementRef;
  featchingDataVisible:boolean = true;
  displayStarData:boolean = false;
  starDataToDisplay: Star;
  
  constructor(private stargazeService:StargazeService, private stardataService:StardataService) { }

  ngOnInit() { 
    this.stars = this.stardataService.getStars();
    this.stargazeService.sceneReady.subscribe(ready => { this.hideProcessingIndicator(); });
    this.stargazeService.hoveredStarChanged.subscribe(hoveredStar => { 
      if (hoveredStar != null) { this.starDataToDisplay = this.stargazeService.hoveredStar.star; }
      this.displayStarData = (hoveredStar != null); 
    });
  }

  hideProcessingIndicator() {
    this.featchingDataVisible = false;
  }

  ngAfterViewInit() {
    this.stars.subscribe(stars => { this.stargazeService.init(this.renderCanvas.nativeElement, stars); });
  }

  ngOnDestroy() {
  }

  mousemove(event: MouseEvent) {
    if (!this.featchingDataVisible) {
      this.stargazeService.updateHoveredStar(event);
    }
  }
}
