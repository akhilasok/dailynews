import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoadingService {

  constructor(private http: Http) { }

  
  loadNews() {

  	return new Promise(function(resolve, reject) {
  		this.http.get("https://newsapi.org/v2/top-headlines?country="+this.country+"&category="+this.category+"&apiKey=a614ae27f39440e09802100d5edbe9fe").
        map((response) => response.json()).subscribe((data) => { 
        	resolve(data.articles)
      	})
  	}).then(data => {
  		return data
  	})
  	
  }

}
