import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';

@Injectable()
export class SceneService {
    private _scene: BABYLON.Scene;

    constructor() { }

    get scene(): BABYLON.Scene {
        return this._scene;
    }

    set scene(scene: BABYLON.Scene)  {
        this._scene = scene;
    }
}