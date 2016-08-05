import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Hero} from './hero';

@Component({
	selector:'hero-form',
	templateUrl:'app/hero-form.component.html'
})

export class HeroFormComponent{
	powers = ['智力型','力量型','敏捷型'];
	model = new Hero(1,'恶魔猎手',this.powers[2],'献祭');
	submitted = false;
	onSubmit(){
		this.submitted = true;
	}
	get diagnostic(){
		return JSON.stringify(this.model);
	}
}