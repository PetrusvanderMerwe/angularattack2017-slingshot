import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Star } from "./classes/star";
import { ExoplanetArchiveAPI } from "./classes/ExoplanetArchiveAPI";
import { Observable, Observer } from 'rxjs';

@Injectable()
export class StardataService {

  private starsObservable:Observable<Star[]>;

  constructor(private http: Http) { }

  getStars(): Observable<Star[]> {
    if (this.starsObservable != null) { 
      return this.starsObservable; 
    } else {
      this.starsObservable = this.http.get(ExoplanetArchiveAPI.BuildStarDataURL()).map((response)=>this.mapStarData(response.toString()) as Star[]);
    }
  }

  mapStarData(starData:string): Star[] {
    return this.splitPipedData(starData).map((row)=>this.mapStarRow(row));
  }

  mapStarRow(starRow:string[]): Star {
    return new Star(starRow[0], Number(starRow[1]), Number(starRow[2]), Number(starRow[3]));
  }

  splitPipedData(textData:string): string[][] {
    let data:string[][] = [];

    let rows:string[] = textData.split('\n');
    console.log('Number of rows: ' + rows.length)
    rows.forEach(row => { data.push(row.split('|')); });
    if (rows.length > 0) { rows = rows.splice(0, 1); }    

    return data;
  }
}
