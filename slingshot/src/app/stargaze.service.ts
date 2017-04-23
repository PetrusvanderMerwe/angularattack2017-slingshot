import { Injectable, EventEmitter } from '@angular/core';
import { RenderEngine } from './classes/RenderEngine';
import { Star } from './classes/star';
import { GazedStar } from './classes/gazedStar';
import * as BABYLON from 'babylonjs';

@Injectable()
export class StargazeService {
  engine: RenderEngine;
  gazedStars: GazedStar[];
  hoveredStar: GazedStar;
  hoveredStarName: string;
  hasHoveredStar: boolean;
  hoveredStarChanged: EventEmitter<GazedStar> = new EventEmitter<GazedStar>();

  constructor() { }

  public init(canvas: HTMLCanvasElement, stars: Star[]) {
    this.engine = new RenderEngine(canvas);
    this.setupScene(stars);
  }

  private setupScene(stars: Star[]) {
    this.engine.createFreeCamera();
    this.engine.createPointLight(new BABYLON.Vector3(0, 0, 0));

    let gazedStars: GazedStar[] = [];
    stars.forEach(star => gazedStars.push(new GazedStar(star, this.engine)));

    this.gazedStars = gazedStars;
  }

  updateHoveredStar(event: MouseEvent) {
    let changed: boolean = false;
    let previouslyHoveredStar = this.hoveredStar;

    // update hovered star
    let pick: BABYLON.PickingInfo = this.engine.scene.pick(event.clientX, event.clientY);
    if (pick.hit) {
      let hoveredStarName = pick.pickedMesh.name;
      if ((!this.hasHoveredStar) || (hoveredStarName != this.hoveredStarName)) {
        this.hasHoveredStar = true;
        this.hoveredStarName = hoveredStarName;
        this.hoveredStar = this.findGazedStar(hoveredStarName);
        changed = true;
      }
    } else if (this.hasHoveredStar) {
        this.hasHoveredStar = false;
        this.hoveredStarName = '';
        this.hoveredStar = null;
        changed = true;
    }

    // update for change
    if (changed) {
      if (previouslyHoveredStar) { previouslyHoveredStar.resetSize(); }
      if (this.hoveredStar) { this.hoveredStar.enlarge(); }
      this.hoveredStarChanged.emit(this.hoveredStar);
    }
  }

  findGazedStar(starName: string): GazedStar {
    return this.gazedStars.find(gazedStar => gazedStar.star.StarName == starName);
  }
}