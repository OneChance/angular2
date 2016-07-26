import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import {HeroFormComponent} from './hero-form.component';

@Component({
	selector:'my-app',
	templateUrl:'app/app.component.html',
	directives:[HighlightDirective,HeroFormComponent]
})

export class AppComponent {}