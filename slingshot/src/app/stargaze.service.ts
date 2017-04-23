import { Injectable } from '@angular/core';
import { RenderEngine } from './classes/RenderEngine';
import { Star } from './classes/star';
import { GazedStar } from './classes/gazedStar';
import * as BABYLON from 'babylonjs';

@Injectable()
export class StargazeService {
  public engine: RenderEngine;
  public gazedStars: GazedStar[];

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
}