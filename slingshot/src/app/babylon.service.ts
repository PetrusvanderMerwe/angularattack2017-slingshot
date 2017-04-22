import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';

@Injectable()
export class BabylonService {
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public camera: BABYLON.FreeCamera;
    public light: BABYLON.HemisphericLight;

    constructor() { }

    public init(canvas: HTMLCanvasElement) {
        this.engine = new BABYLON.Engine(canvas);
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this.scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(canvas, false);
        this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2 }, this.scene);
        sphere.position.y = 1;
        let ground = BABYLON.MeshBuilder.CreateGround('ground1', {width: 6, height: 6, subdivisions: 2}, this.scene);
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
}