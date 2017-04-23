import { Component, OnInit, Input } from '@angular/core';
import { Star } from './../classes/star'

@Component({
  selector: 'app-starinfo',
  templateUrl: './starinfo.component.html',
  styleUrls: ['./starinfo.component.css']
})
export class StarinfoComponent implements OnInit {
  star: Star;
  @Input() set starData(star: Star) {
    this.star = star;
  }  
  constructor() { }

  ngOnInit() {
    this.starData = this.star;
  }
}