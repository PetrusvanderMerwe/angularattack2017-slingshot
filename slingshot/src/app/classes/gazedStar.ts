import { Star } from './star';
import { RenderEngine } from './RenderEngine';
import * as BABYLON from 'babylonjs';

export class GazedStar {
    public star: Star;
    public billboard: BABYLON.Mesh;
    public sphere: BABYLON.Mesh;
    public position: BABYLON.Vector3;
    public renderEngine: RenderEngine;

    public readonly DRAWN_DISTANCE: number = 200;
    public readonly BILLBOARD_DIAMETER: number = 8;
    public readonly SPHERE_DIAMETER: number = 1.5;

    constructor(star: Star, renderEngine: RenderEngine) {
        this.star = star;
        this.renderEngine = renderEngine;
        this.computeParameters();
        this.billboard = this.renderEngine.addBillboard(this.star.StarName, this.BILLBOARD_DIAMETER, this.position, './assets/StarBillboardTexture.png');
        this.sphere = this.renderEngine.addSphere(this.star.StarName, this.position, this.SPHERE_DIAMETER);
    }

    computeParameters() {
        this.computePosition();
    }

    computePosition() {
        let r:number = this.DRAWN_DISTANCE;
        let y:number = r * Math.sin(this.star.ElipticLatitude);
        let r2 = r * Math.cos(this.star.ElipticLatitude);
        let x:number = r2 * Math.sin(this.star.ElipticLongitude);
        let z:number = r2 * Math.cos(this.star.ElipticLongitude);
        this.position = new BABYLON.Vector3(x, y, z);
    }   
}