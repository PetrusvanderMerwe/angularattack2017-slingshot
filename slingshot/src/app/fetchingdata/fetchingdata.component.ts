import { Component, OnInit, Input  } from '@angular/core';
import { StardataService } from './../stardata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetchingdata',
  templateUrl: './fetchingdata.component.html',
  styleUrls: ['./fetchingdata.component.css'],
})
export class FetchingdataComponent implements OnInit {
  @Input() navigateToStarGaze: boolean = true;
  @Input() displaymessage: string = 'Fecthing data, hold on for a short while ...';
  messageToDisplay: string;

  constructor(private stardataService:StardataService, private router: Router) { }

  ngOnInit() {
    this.messageToDisplay = this.displaymessage;
    if (this.navigateToStarGaze) {
      this.stardataService.getStars().subscribe(stars => { this.router.navigate(['stargaze']); });
    }
  }
}
