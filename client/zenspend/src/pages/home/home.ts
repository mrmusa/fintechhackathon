import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Array<any>;

  constructor(public http: Http) {

	  // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
	  //       this.posts = data.data.children;
	  //       console.log(data.data.children);
	  //   });

	  this.posts = [
	  	{ merchant: 'Esterling', date: '2017-02-02' },
	  	{ merchant: 'Will', date: '2017-02-03' },
	  	{ merchant: 'Musa', date: '2017-02-04' }
	  ]

  }

  zenRemove(idx: number) {
  	this.posts.splice(idx, 1);
  }
  swipeLeft(){
  	console.log("Hey Testing");
  }
}



