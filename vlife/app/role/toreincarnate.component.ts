/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, ElementRef, Inject } from '@angular/core';
import { Account } from '../entity/account';
import { Translate } from '../tool/i18n.pipe';
import { RoleService } from '../role/role.service';
import { NetMessage } from '../entity/netmessage';
import { AppService } from '../app.service';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'my-app',
	templateUrl: 'app/role/toreincarnate.component.html',
	pipes: [Translate],
	providers: [RoleService]
})

export class ToReincarnateComponent {

	account: Account;

	constructor(private roleService: RoleService, private appService:AppService, private el: ElementRef) {
		this.roleService.toReincarnate().then(account => this.setAccount(account));
	}

	setAccount(account: Account) {
		this.account = account;
	}

	toProfile(){
		this.appService.routeTo('/profile');
	}

	reincarnateRes(netMessage:NetMessage){
		if(netMessage.content){
			this.appService.receiveMsg(new NetMessage(netMessage.type,netMessage.content,true));
			if(netMessage.type==NetMessage.SUCCESS){
				this.appService.routeTo('/profile');
			}
		}
	}

	reincarnate(){
		this.roleService.reincarnate().then(res=>this.reincarnateRes(res));
	}


}