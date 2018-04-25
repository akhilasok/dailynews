import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
 
  constructor(private http: Http) { }
  @Input()
    news: String;

  	selectedNews = false;
    newsData = {};
    latestnews;
    ngOnInit() {
        this.http.get("https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=a614ae27f39440e09802100d5edbe9fe").
        map(
         (response) => response.json()
        ).
        subscribe((data) => { 
          if(data && data.articles) {
            this.displaydata(data.articles);
          }
      	})
    },
    displaydata(data) {
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
