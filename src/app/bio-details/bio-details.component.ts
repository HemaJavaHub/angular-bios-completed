import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {
  developer:Developer;

  constructor(
    private developerService:DeveloperService,
    private activatedRoute:ActivatedRoute) { }

  getDeveloper(){
    this.developer = this.developerService.getDeveloperById(
      this.activatedRoute.snapshot.params['id']
    );
  }

  ngOnInit() {
    this.getDeveloper();
  }

}
