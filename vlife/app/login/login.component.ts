import { Component,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../entity/account'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Message } from '../entity/message';
import { Translate } from '../tool/i18n.pipe';
import { LoginService } from './login.service';

@Component({
	selector:'login-form',
	templateUrl:'app/login/login.component.html',
	pipes: [Translate],
	providers:[LoginService]
})

export class LoginComponent{
	model = new Account();
	private el:HTMLElement;
	submiting:boolean = false;

	constructor(private appService:AppService,private loginService:LoginService,private router:Router){
		this.model.enterType='login';
	}

	onSubmit(){
		this.submiting = true;
		this.loginService.login(this.model).then(account=>this.loginRes(account),error=>this.submiting=false);
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
	  			this.appService.receiveMsg(new Message("danger",account.msg,true));
	  		}
  		}  		
  	}

  	changeLang(lang){
  		document.cookie = "lang="+lang;
  		location.reload();
  	}
}