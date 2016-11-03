import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../entity/account'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NetMessage } from '../entity/netmessage';
import { Translate } from '../tool/i18n.pipe';
import { LoginService } from './login.service';

@Component({
	templateUrl: 'app/login/login.component.html',
	pipes: [Translate],
	providers: [LoginService]
})

export class LoginComponent {
	model = new Account();
	private el: HTMLElement;
	submiting: boolean = false;

	constructor(private appService: AppService, private loginService: LoginService, private router: Router) {
		this.model.enterType = 'login';
	}

	onSubmit() {
		this.submiting = true;
		this.loginService.login(this.model).then(account => this.loginRes(account as NetMessage), error => this.submiting = false);
	}

	ngAfterViewInit() {

	}

	loginRes(netMessage: NetMessage) {
		if (!netMessage.content) {
			let link = ['/profile'];
			this.router.navigate(link);
		} else {
			this.submiting = false;
			this.appService.receiveMsg(new NetMessage(netMessage.type, netMessage.content, true));
		}
	}

	changeLang(lang) {
		document.cookie = "lang=" + lang;
		location.reload();
	}
}