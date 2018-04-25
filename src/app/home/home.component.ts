import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
    description: string;
  todaydate;
  newcomponent = "Entered in new component created";

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
  	this.todaydate = this.myservice.showTodayDate();
  }

}
