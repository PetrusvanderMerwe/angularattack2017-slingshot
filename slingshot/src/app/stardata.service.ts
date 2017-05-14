import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Star } from "./classes/star";
import { ExoplanetArchiveAPI } from "./classes/ExoplanetArchiveAPI";
import { Observable  } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class StardataService {

  private starsObservable:Observable<Star[]>;

  constructor(private http: Http) { }

  getStars(): Observable<Star[]> {
    if (this.starsObservable == null) { 
      this.starsObservable = this.http.get(ExoplanetArchiveAPI.BuildStarDataURL()).map(response=>this.mapStarData(response.text()) as Star[]);
    }
    return this.starsObservable;
  }

  mapStarData(starData:string): Star[] {
    let stars: Star[] = this.splitPipedData(starData).map((row)=>this.mapStarRow(row));
    this.normalizeBrightness(stars);
    return stars;
  }

  normalizeBrightness(stars: Star[]) {
    if (stars.length > 0) {
      let min:number = stars[0].Brightness;
      let max:number = stars[0].Brightness;

      stars.forEach(star => {
        let brightness = star.Brightness;
        if (brightness < min) { min = brightness; }
        if (brightness > max) { max = brightness; }
      });

      let delta:number = Math.abs(max-min);
      stars.forEach(star => {
        star.Brightness = (!isNaN(star.Brightness) ? ((star.Brightness - min) / delta) : 0);
      });
    }
  }

  mapStarRow(starRow:string[]): Star {
    return new Star(starRow[0], Number(starRow[1]), Number(starRow[2]), Number(starRow[3]), Number(starRow[4]), Number(starRow[4]));
  }

  splitPipedData(textData:string): string[][] {
    let data:string[][] = [];

    let rows:string[] = textData.split('\n');
    rows.forEach((row, index) => { if (index > 0) { data.push(row.split('|')); } });
    if (rows.length > 0) { rows = rows.splice(0, 1); }    

    return data;
  }
}
