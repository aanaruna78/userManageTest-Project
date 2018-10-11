import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

userid : object;
user: object;
  constructor(private dataService:DataServiceService,private route:ActivatedRoute) {

    this.route.params.subscribe(params=>{
      this.userid = params.id;
    });

   }

  ngOnInit() {
    this.dataService.getUserDetails(this.userid).subscribe(data=>{
      this.user = data;
    });
  }

}
