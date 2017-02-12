import { Component } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Array<any>;

  purchase:Array<any>;

  constructor(public http: Http) {

    http.get('https://zen-spend.herokuapp.com/api/txn/latest')
      .map(res => res.json()).subscribe(data => {

      this.posts = data.transactions;

    });

	  // this.posts = [
	  // 	{ merchant: 'Esterling', date: '2017-02-02' },
	  // 	{ merchant: 'Will', date: '2017-02-03' },
	  // 	{ merchant: 'Musa', date: '2017-02-04' }
	  // ]

  }

  zenRemove(idx: number) {
  	this.posts.splice(idx, 1);
  }
  swipeLeft(){
  	console.log("Hey Testing");
  }
}
