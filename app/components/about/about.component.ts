import {Component} from '@angular/core';

@Component({
	moduleId:module.id,
	selector:'my-about',
	templateUrl:'./about.component.html'
})

export class AboutComponent{

	private message:string;

	constructor(){
		this.message="jany"
	}

}