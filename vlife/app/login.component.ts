import { Component,AfterViewInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Account} from './entity/account'
import {GameService} from './game.service';
import { Router } from '@angular/router';

@Component({
	selector:'login-form',
	templateUrl:'app/login.component.html'
})

export class LoginComponent{
	model = new Account();
	private el:HTMLElement;

	constructor(private gameService:GameService,private router:Router){
		this.model.entertype='login';
	}

	onSubmit(){
		this.gameService.login(this.model).then(account=>this.loginRes(account));
	}

	ngAfterViewInit() {
    	
  	}

  	loginRes(account:Account){
  		this.model.msg = account.msg;
  		var modelRef = this.model;
  		setTimeout(function(){
  			modelRef.msg = "";
  		},2000);
  		if(!account.msg){
  			let link = ['/profile'];
			this.router.navigate(link);
  		}
  	}
}