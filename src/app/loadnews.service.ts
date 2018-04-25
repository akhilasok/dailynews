import { Injectable } from '@angular/core';

@Injectable()
export class LoadnewsService {

  	constructor() { }

  	fetchnews () {
  		this.http.get("https://newsapi.org/v2/top-headlines?country="+this.country+"&category="+this.category+"&apiKey=a614ae27f39440e09802100d5edbe9fe").
        map(
         (response) => response.json()
        ).
        subscribe((data) => { 
        	return data.articles
      	})
  	}
}
