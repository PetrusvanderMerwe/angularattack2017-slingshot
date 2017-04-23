import { Star } from './star';
import { RenderEngine } from './RenderEngine';
import * as BABYLON from 'babylonjs';

export class GazedStar {
    public star: Star;
    public mesh: BABYLON.Mesh;
    public position: BABYLON.Vector3;
    public renderEngine: RenderEngine;

    public readonly DRAWN_DISTANCE: number = 100;
    public readonly DRAWN_DIAMETER: number = 0.3;

    constructor(star: Star, renderEngine: RenderEngine) {
        this.star = star;
        this.renderEngine = renderEngine;
        this.computeParameters();
        this.mesh = this.renderEngine.addSphere(this.star.StarName, this.position, this.DRAWN_DIAMETER);
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