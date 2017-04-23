import * as BABYLON from 'babylonjs';

export class RenderEngine {
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public camera: BABYLON.FreeCamera;
    public hemisphericLight: BABYLON.HemisphericLight;    

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(this.canvas);
        this.createScene();
        this.engine.runRenderLoop(() => {this.scene.render(); });
    }

    public setupTestScene() {
        this.createFreeCamera();
        this.createLight();
        this.addSphere();
    }

    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    }

    addSphere() {
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2 }, this.scene);
        sphere.position.y = 1;
    }

    addGround() { 
        let ground = BABYLON.MeshBuilder.CreateGround('ground1', {width: 6, height: 6, subdivisions: 2}, this.scene);
    }

    createFreeCamera() {
        this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this.scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(this.canvas, false);
    }

    createLight() {
        this.hemisphericLight = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
    }
}