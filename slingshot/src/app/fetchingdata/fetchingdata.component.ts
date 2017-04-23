import { Component, OnInit } from '@angular/core';
import { StardataService } from './../stardata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetchingdata',
  templateUrl: './fetchingdata.component.html',
  styleUrls: ['./fetchingdata.component.css'],
})
export class FetchingdataComponent implements OnInit {

  constructor(private stardataService:StardataService, private router: Router) { 
  }

  ngOnInit() {
    this.stardataService.getStars().subscribe(stars => { this.router.navigate(['stargaze']); });
  }
}
