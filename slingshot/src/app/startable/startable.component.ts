import { Component, OnInit } from '@angular/core';
import { StardataService } from './../stardata.service';
import { Star } from "./../classes/star";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-startable',
  templateUrl: './startable.component.html',
  styleUrls: ['./startable.component.css']
})
export class StartableComponent implements OnInit {

  stars: Observable<Star[]>;

  constructor(private stardataService:StardataService) { }

  ngOnInit() {
    this.stars = this.stardataService.getStars();
  }
}
