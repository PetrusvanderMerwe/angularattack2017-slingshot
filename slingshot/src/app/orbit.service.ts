import { Injectable } from '@angular/core';
import { RenderEngine } from './classes/RenderEngine';

@Injectable()
export class OrbitService {
  public engine: RenderEngine;

  constructor() { }

    public init(canvas: HTMLCanvasElement) {
        this.engine = new RenderEngine(canvas);
    }
}
