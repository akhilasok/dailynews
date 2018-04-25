import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-newspapper',
  templateUrl: './newspapper.component.html',
  styleUrls: ['./newspapper.component.css']
})
export class NewspapperComponent implements OnInit {

  constructor(private http: Http, private loadservice: LoadingService) { }
  	latestnews = [];
    active = ''
  	country = 'IN'
  	loading = true
  	category = ''
    ngOnInit() {
        console.log(this.loadservice.loadNews())
        
        this.http.get("https://newsapi.org/v2/top-headlines?country="+this.country+"&category="+this.category+"&apiKey=a614ae27f39440e09802100d5edbe9fe").
        map(
         (response) => response.json()
        ).
        subscribe((data) => { 
      	 this.displaydata(data.articles);
        })
    },
    displaydata(data) {
    	var vm = this
    	var news = []
    	var gridmax = 12
    	var gridstart = 0
    	data.forEach((x, index) => {
    		this.getMeta(x.urlToImage).then(ratio => {
    			x.ratio = ratio
    			if(x.description.length > 150) {
    				x.size =  'large'
    				if(gridstart + 6 > 12) {
    					x.class = 'col-sm-' + (gridmax - gridstart)
    					gridstart = gridstart + (gridmax - gridstart)
    				} else {
    					x.class = 'col-sm-6'
    					gridstart = gridstart + 6
    				}
    				
    			} else {
    				x.size = 'medium'

    				if(gridstart + 3 > 12) {
    					x.class = 'col-sm-' + (gridmax - gridstart)
    					gridstart = gridstart + (gridmax - gridstart)
    				} else {
    					x.class = 'col-sm-3'
    					gridstart = gridstart + 3
    				}
    			}
    			if(gridstart >= 12) {
    				gridstart = 0
    			}
    			news.push(x)
    		})
    	})
    	Promise.all(news).then(data => {
    		this.latestnews = news
    		this.loading = false
    	})
   	    
    },
    getMeta(url){   
    	var ratio = {}
    	return new Promise(function(resolve, reject){
    		var img = new Image();
	    	img.onload = function(){
	        	ratio =  {width: this.width, height: this.height}
	        	resolve({width: this.width, height: this.height})
	    	};
	    	img.src = url;

    	}).then(data => {
    		return data
    	})
    
	},
	changeCategory (category) {
		this.category = category
		this.active = category
		this.ngOnInit()
	},
	changeCountry(event) {
		this.country = event.target.value
		this.ngOnInit()
	},
    selectNews(data) {
        
        console.log(this.location)
        this.location.back();
    }

}
