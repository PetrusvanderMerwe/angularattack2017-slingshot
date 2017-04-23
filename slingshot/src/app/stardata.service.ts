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
      //this.http.get(ExoplanetArchiveAPI.BuildStarDataURL()).subscribe(response=>{console.log(response.toString())});
      this.starsObservable = this.http.get(ExoplanetArchiveAPI.BuildStarDataURL()).map(response=>this.mapStarData(response.text()) as Star[]);
    }
    return this.starsObservable;
  }

  mapStarData(starData:string): Star[] {
    console.log('mapping star data: ' + starData);
    return this.splitPipedData(starData).map((row)=>this.mapStarRow(row));
  }

  mapStarRow(starRow:string[]): Star {
    return new Star(starRow[0], Number(starRow[1]), Number(starRow[2]), Number(starRow[3]));
  }

  splitPipedData(textData:string): string[][] {
    let data:string[][] = [];

    let rows:string[] = textData.split('\n');
    console.log('Number of rows: ' + rows.length)
    rows.forEach((row, index) => { if (index > 0) { data.push(row.split('|')); } });
    if (rows.length > 0) { rows = rows.splice(0, 1); }    

    return data;
  }
}
