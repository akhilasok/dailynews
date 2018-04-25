import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newslayout',
  templateUrl: './newslayout.component.html',
  styleUrls: ['./newslayout.component.css']
})
export class NewslayoutComponent implements OnInit {

  	constructor() { }
  	@Input()
  		news: Array;
  	ngOnInit() {
  	}

}
