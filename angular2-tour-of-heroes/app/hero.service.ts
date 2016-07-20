import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{

	private heroesUrl = 'http://localhost:8080/api/account';//app/heroes

	constructor(private http:Http){}

	getHeroes():Promise<Hero[]>{
		return this.http.get(this.heroesUrl).toPromise().then(response=>response.json().map(one=>new Hero(one.id,one.name))).catch(this.handleError);
	}

	add(hero:Hero):Promise<Hero>{
		let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
		return this.http.post(this.heroesUrl,JSON.stringify(hero),{headers:headers}).toPromise().then(res=>res.json()).catch(this.handleError);
	}

	update(hero:Hero){
		let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
		let url = `${this.heroesUrl}/${hero.id}`;
		return this.http.put(url,JSON.stringify(hero),{headers:headers}).toPromise().then(()=>hero).catch(this.handleError);
	}

	delete(hero:Hero){
		let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
		let url = `${this.heroesUrl}/${hero.id}`
		return this.http.delete(url,{headers:headers}).toPromise().catch(this.handleError);
	}

	save(hero:Hero):Promise<Hero>{
		if(hero.id){
			return this.update(hero);
		}
		return this.add(hero);
	}
	

	private handleError(error:any){
		console.error('服务端错误',error);
		return Promise.reject(error.message || error);
	}

	getHero(id:number){
		return this.getHeroes().then(heros=>heros.find(hero=>hero.id===id));
	}
}