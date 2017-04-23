import * as BABYLON from 'babylonjs';

export class RenderEngine {
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public camera: BABYLON.FreeCamera;
    public light: BABYLON.Light;    

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(this.canvas);
        this.createScene();
        this.engine.runRenderLoop(() => {this.scene.render(); });
    }

    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    }

    createFreeCamera() {
        this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, 0), this.scene);
        this.camera.setTarget(new BABYLON.Vector3(0, 0, 1));
        this.camera.attachControl(this.canvas, false);
    }

    createHemisphericLight() {
        this.light = new BABYLON.HemisphericLight('hemisphericLight', new BABYLON.Vector3(0, 1, 0), this.scene);
    }

    createPointLight(position:BABYLON.Vector3) {
        this.light = new BABYLON.PointLight('pointLight', position, this.scene);
    }

    addBillboard(name:string, size: number, position: BABYLON.Vector3, pathToTexture, alpha: number): BABYLON.Mesh {

        // mesh
        let billboard:BABYLON.Mesh = BABYLON.MeshBuilder.CreatePlane(name, { size: size }, this.scene);
        billboard.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
        billboard.position = position;

        // material
        let material: BABYLON.StandardMaterial = new BABYLON.StandardMaterial(name + "_material", this.scene);
        material.diffuseTexture = new BABYLON.Texture(pathToTexture, this.scene);
        material.opacityTexture = new BABYLON.Texture(pathToTexture, this.scene);
        material.alpha = alpha;
        material.specularColor = new BABYLON.Color3(0, 0, 0);
        material.specularPower = 0;
        billboard.material = material;

        return billboard;
    }

    addSphere(name: string, position: BABYLON.Vector3, diameter: number, diffuseColor: BABYLON.Color3, alpha: number): BABYLON.Mesh  {

        // mesh
        let sphere: BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere(name, { segments: 16, diameter: diameter, updatable: true }, this.scene);
        sphere.position = position;

        // material
        let material: BABYLON.StandardMaterial = new BABYLON.StandardMaterial(name + "_material", this.scene);
        material.diffuseColor = diffuseColor;
        material.alpha = alpha;
        material.specularColor = new BABYLON.Color3(0, 0, 0);
        sphere.material = material;

        return sphere;
    }
}