import {Component} from '@angular/core';

@Component({
	selector:'sample',
	template:`<div class="container" *ngIf="showHeader">
	          <h1>this is sample page</h1>
	          <br>
	          she is:{{name|uppercase}}<br>
	          <img [src]="imageUrl"/><br><br>
	          <button class="btn btn-primary"  (click)="runMe()">click me</button><br><br>
	          Name:<input type="text" [(ngModel)]="realName" (keyup.enter)="send($event)"/>
	          <br>
	          {{realName}}
	          <br><br>
	          <ul *ngFor="let item of items">
	          <li>{{item}}</li></ul>
	          <br>
	          Display price:{{price|currency:'USD':true}}
	          </div>`
})

export class SampleComponent{
	private name:string;
	private imageUrl:string;
    private realName:string;
    private showHeader:boolean;
    private items:string[];
    private price:number;


	constructor(){
		this.name="asha"
		this.imageUrl="http://lorempixel.com/400/200"
		this.realName="asha";
        this.showHeader=true
        this.items=["tv","Fridge","AC","Car"]
        this.price=1500;
	}

	runMe(){
		console.log("hey wait !!!,did you click me")
	}
	send(asha:any){
		console.log(asha.target.value)
	}
} 