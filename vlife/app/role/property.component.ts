/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component,ElementRef,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../entity/account';
import { NetMessage } from '../entity/netmessage';
import { Translate } from '../tool/i18n.pipe';
import { LoginService } from '../login/login.service';
import { RoleService } from './role.service';
import { AppService } from '../app.service';
import { PropertyOperatorComponent } from './property-operator.component';

declare var jQuery:JQueryStatic;

@Component({
	templateUrl:'app/role/property.component.html',
	pipes: [Translate],
	providers:[LoginService,RoleService],
	directives:[PropertyOperatorComponent]
})

export class PropertyComponent{

	account:Account;

	constructor(private roleService:RoleService,private appService:AppService,private loginService:LoginService,private router:Router,private el:ElementRef){
		this.loginService.getLoginAccount().then(account=>this.setAccount(account));
	}

	setAccount(account:Account){
		this.account = account
	}

	changeProperty(){
		var propAccount = new Account();
		propAccount.addDef = this.account.addDef;
		propAccount.addDex = this.account.addDex;
		propAccount.addHp = this.account.addHp;
		propAccount.addInt = this.account.addInt;
		propAccount.addPow = this.account.addPow;
		this.roleService.changeProperty(propAccount).then(res=>this.changeRes(res as NetMessage));
	}

	changeRes(netMessage:NetMessage){
		if(netMessage.content){
			this.appService.receiveMsg(new NetMessage(netMessage.type,netMessage.content,true));			
		}
	}

	toProfile(){
		this.appService.routeTo('/profile');
	}
}