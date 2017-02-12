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

	  this.http.get('https://cors.now.sh/https://zen-spend.herokuapp.com/api/txn/latest').map(res => res.json()).subscribe(data => {

	        console.log(data.transactions[9].merchant.name);
	        const nameArray = [];
	        console.log(data.transactions);
	        for (var i = 0; i < data.transactions.length; i++) {
	        	if (data.transactions[i].merchant === undefined) {
	        		console.log(data.transactions[i].merchant);
	        		nameArray.push(data.transactions[i].merchant.name);
	        	}
	        	else {
	        		console.log("error");
	        	}
	        }
	        this.posts = nameArray;
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



