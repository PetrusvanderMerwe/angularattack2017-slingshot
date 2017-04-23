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
    }

    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    }

    addSphere(name: string, position: BABYLON.Vector3, diameter: number): BABYLON.Mesh  {
        let sphere: BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere(name, { segments: 16, diameter: diameter }, this.scene);
        sphere.position = position;
        return sphere;
    }

    createFreeCamera() {
        this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, 0), this.scene);
        this.camera.setTarget(new BABYLON.Vector3(0, 0, 1));
        this.camera.attachControl(this.canvas, false);
    }

    createLight() {
        this.hemisphericLight = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
    }
}