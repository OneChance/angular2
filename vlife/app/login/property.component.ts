/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component,ElementRef,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../entity/account';
import { Message } from '../entity/message';
import { Translate } from '../tool/i18n.pipe';
import { LoginService } from './login.service';

declare var jQuery:JQueryStatic;

@Component({
	selector:'my-app',
	templateUrl:'app/login/property.component.html',
	pipes: [Translate],
	providers:[LoginService]
})

export class PropertyComponent{

	account:Account;

	constructor(private loginService:LoginService,private router:Router,private el:ElementRef){
		this.loginService.getLoginAccount().then(account=>this.checkAccount(account));
	}

	checkAccount(account:Account){
		if(!account.name){
			let link = ['/login'];
			this.router.navigate(link);
		}else{
			this.account = account;
		}
	}	
}