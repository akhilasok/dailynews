import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private http: Http) { }

  newsData = {};
    latestnews;
    ngOnInit() {
        console.log(this.router)
        this.http.get("https://newsapi.org/v2/top-headlines?country=IN&category=sports&apiKey=a614ae27f39440e09802100d5edbe9fe").
        map(
         (response) => response.json()
        ).
        subscribe((data) => { 
      	 this.displaydata(data.articles);
        })
    },
    displaydata(data) {
   	    console.log(data)
   	    this.latestnews = data
    },
    selectNews(data) {
   	    this.selectedNews = true
   	    this.newsData = data
        console.log(data)
    },
    backAction(event) {
        this.selectedNews = false
    }

}
