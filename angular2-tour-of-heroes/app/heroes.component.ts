import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector:'my-heroes',
	templateUrl:'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives:[HeroDetailComponent],
	animations:[
		trigger('heroState',[
			state('inactive',style({
				backgroundColor:'#eee',
				transform:'scale(1)'
			})),
			state('active',style({
				backgroundColor:'#cfd8dc',
				transform:'scale(1.1)'
			})),
			transition('inactive=>active',animate('100ms ease-in')),
			transition('active=>inactive',animate('100ms ease-out')),
			transition('void=>*', [animate(300, keyframes([style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
														   style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
														   style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      													  ]))]),
			transition('*=>void',[animate(300, keyframes([style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
														  style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
														  style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
														 ]))])
		])
	]
})

export class HeroesComponent implements OnInit{
	public heroes:Hero[];
	selectedHero:Hero;
	addingHero:boolean;
	error:any;

	ngOnInit(){
		this.getHeroes();
	}

	constructor(private heroService:HeroService,private router:Router){}

	getHeroes() {this.heroService.getHeroes().then(heros=>this.heroes = heros);}

	onSelect(hero: Hero) {

		hero.toggleState();

		if(this.selectedHero && this.selectedHero!=hero){
			this.selectedHero.toggleState();
		}

		if(hero.state==='active'){
			this.selectedHero = hero;
		}else{
			this.selectedHero = null;
		}

		this.addingHero = false;		
	}

	gotoDetail(){
		let link = ['/detail',this.selectedHero.id];
		this.router.navigate(link);
	}

	addHero(){
		this.addingHero = true;
		if(this.selectedHero){
			this.selectedHero.toggleState();
		}
		this.selectedHero = null;
	}

	close(savedHero:Hero){
		this.addingHero = false;
		if(savedHero){
			this.heroes.push(savedHero);
		}
	}

	deleteHero(hero:Hero,event:any){
		event.stopPropagation();
		this.heroService.delete(hero).then(res=>{
			this.heroes = this.heroes.filter(h=>h!==hero);
			if(this.selectedHero === hero ){
				this.selectedHero = null;
			}
		}).catch(error=>this.error=error);		
	}
}
