import {Component} from '@angular/core';

import {HomeComponent} from './components/home/home.components'

import {AboutComponent} from './components/about/about.component'

import {SampleComponent} from './sample.component'

@Component({

	selector:'my-app',
	template:`<div *ngIf="true">
	          <h1>janeesha</h1>
	           <my-home></my-home>
	           <my-about></my-about>
	           <sample></sample>
	           </div>`

})

export class AppComponent{

}
