import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector:'my-heroes',
	templateUrl:'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
	public heroes:Hero[];	
	selectedHero:Hero;

	ngOnInit(){
		this.getHeroes();
	}

	constructor(private heroService:HeroService,private router:Router){}

	getHeroes() {this.heroService.getHeroes().then(heros=>this.heroes = heros);}

	onSelect(hero: Hero) { 
		this.selectedHero = hero; 		
	}

	gotoDetail(){
		let link = ['/detail',this.selectedHero.id];
		this.router.navigate(link);
	}
}
