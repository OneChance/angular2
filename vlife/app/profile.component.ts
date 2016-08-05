import { Component } from '@angular/core';
import { GameService } from './game.service';
import { Router } from '@angular/router';
import { Account } from './entity/account';
import { Message } from './entity/message';

@Component({
	selector:'my-app',
	templateUrl:'app/profile.component.html'
})

export class ProfileComponent{

	account:Account;

	constructor(private gameService:GameService,private router:Router){
		this.gameService.getLoginAccount().then(account=>this.checkAccount(account),error=>this.gameService.reveiveMsg(<Message>error));
	}

	info(){
		alert('detail');
	}

	checkAccount(account:Account){
		alert(account)
		if(!account.name){
			let link = ['/login'];
			this.router.navigate(link);
		}
	}
}