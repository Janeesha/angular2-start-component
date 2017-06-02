import {Component} from '@angular/core';

import {HomeComponent} from './components/home/home.components'

import {AboutComponent} from './components/about/about.component'


@Component({

	selector:'my-app',
	template:`<div>
	          <h1>janeesha</h1>
	           <my-home></my-home>
	           <my-about></my-about>
	           </div>`

})

export class AppComponent{

}
