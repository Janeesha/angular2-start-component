import {Component} from '@angular/core'

@Component({
	moduleId:module.id,//predefined if u mention templateurl then u should give this
	selector:'my-home',
	// template: `<h1>
	//             janeeshaGowda
	//             </h1>`
	templateUrl:'./home.component.html'
})

export class HomeComponent{

	private message:string;

	constructor(){
		this.message="janeeshaGowda"
	}

}