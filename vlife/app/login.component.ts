import { Component,AfterViewInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Account} from './entity/account'
import {GameService} from './game.service';
import { Router } from '@angular/router';
import { Message } from './entity/message';
import { Translate } from './tool/i18n.pipe';

@Component({
	selector:'login-form',
	templateUrl:'app/login.component.html',
	pipes: [Translate]
})

export class LoginComponent{
	model = new Account();
	private el:HTMLElement;
	submiting:boolean = false;

	constructor(private gameService:GameService,private router:Router){
		this.model.entertype='login';
	}

	onSubmit(){
		this.submiting = true;
		this.gameService.login(this.model).then(account=>this.loginRes(account),error=>this.submiting=false);
	}

	ngAfterViewInit() {
    	
  	}

  	loginRes(account:Account){
  		if(account){
	  		if(!account.msg){
	  			let link = ['/profile'];
				this.router.navigate(link);
	  		}else{
	  			this.submiting = false;
	  			this.gameService.receiveMsg(new Message("danger",account.msg,true));
	  		}
  		}  		
  	}

  	changeLang(lang){
  		document.cookie = "lang="+lang;
  		location.reload();
  	}
}