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

  purchase:Array<any>;

  constructor(public http: Http) {

	  this.http.get('https://cors.now.sh/https://zen-spend.herokuapp.com/api/txn/latest').map(res => res.json()).subscribe(data => {

	  		this.posts = data.transactions;
	  		const expense = [];

	  		const merchantInfo = [
	  				{
	  					merchant:[]
	  				},
	  				{
	  					date:[]
	  				},
	  				{
	  					amount:[]
	  				},
	  				{
	  					location:[]
	  				}
	  			];

	  		data.transactions.map(element => {
	  			if(element.merchant){
	  				expense.push(element.merchant.name);
	  			}

	  			else {
	  				console.log("Late payment!");
	  			}
	  		});

	  		console.log(expense);
	  		this.purchase = expense;
	       
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