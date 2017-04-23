import { Star } from './star';
import { RenderEngine } from './RenderEngine';
import * as BABYLON from 'babylonjs';

export class GazedStar {
    public star: Star;
    public billboard: BABYLON.Mesh;
    public sphere: BABYLON.Mesh;
    public position: BABYLON.Vector3;
    public renderEngine: RenderEngine;
    public intensity: number;

    public readonly DRAWN_DISTANCE: number = 220;
    public readonly BILLBOARD_DIAMETER: number = 6; //8
    public readonly SPHERE_DIAMETER: number = 1; // 1.5
    public readonly MINIMUM_INTENSITY: number = 0.2;
    public readonly BILLBOARD_IMAGE_PATH: string = './assets/StarBillboardTexture.png';

    constructor(star: Star, renderEngine: RenderEngine) {
        this.star = star;
        this.renderEngine = renderEngine;
        this.computeParameters();
        this.billboard = this.renderEngine.addBillboard(this.star.StarName, this.BILLBOARD_DIAMETER, this.position, this.BILLBOARD_IMAGE_PATH, this.intensity);
        this.sphere = this.renderEngine.addSphere(this.star.StarName, this.position, this.SPHERE_DIAMETER, new BABYLON.Color3(1, 1, 1), this.intensity);
    }

    computeParameters() {
        this.computePosition();
        this.computeIntensity();
    }

    computePosition() {
        let r:number = this.DRAWN_DISTANCE;
        let y:number = r * Math.sin(this.star.ElipticLatitude);
        let r2 = r * Math.cos(this.star.ElipticLatitude);
        let x:number = r2 * Math.sin(this.star.ElipticLongitude);
        let z:number = r2 * Math.cos(this.star.ElipticLongitude);
        this.position = new BABYLON.Vector3(x, y, z);
    }

    computeIntensity() {
        this.intensity = this.MINIMUM_INTENSITY + ((this.star.Brightness) * (1 - this.MINIMUM_INTENSITY));
    }

    enlarge() {
        this.billboard.scaling = new BABYLON.Vector3(3, 3, 3);
    }

    resetSize() {
        this.billboard.scaling = new BABYLON.Vector3(1, 1, 1);
    }
}