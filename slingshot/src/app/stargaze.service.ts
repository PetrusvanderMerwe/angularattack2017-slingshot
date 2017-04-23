import { Injectable } from '@angular/core';
import { RenderEngine } from './classes/RenderEngine';

@Injectable()
export class StargazeService {
  public engine: RenderEngine;

  constructor() { }

    public init(canvas: HTMLCanvasElement) {
        this.engine = new RenderEngine(canvas);
    }
}