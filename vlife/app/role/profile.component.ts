/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, ElementRef, Inject } from '@angular/core';
import { AppService } from '../app.service';
import { Account } from '../entity/account';
import { Translate } from '../tool/i18n.pipe';
import { LoginService } from '../login/login.service';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'my-app',
	templateUrl: 'app/role/profile.component.html',
	pipes: [Translate],
	providers: [LoginService]
})

export class ProfileComponent {

	account: Account;
	lifeComplete: boolean = false;
	profileImg: string = "images/profile.png";

	constructor(private loginService: LoginService, private appService:AppService, private el: ElementRef) {
		this.loginService.getLoginAccount().then(account => this.setAccount(account));
	}

	property() {
		this.appService.routeTo('/property');
	}

	signOut() {
		this.loginService.loginOut().then(netObject => this.loginOut())
	}

	loginOut() {
		this.appService.routeTo('/login');
	}

	setAccount(account: Account) {
		this.account = account;
		this.profileImg = "images/" + account.species.name + "/" + account.level + ".png";

		var now = new Date();
		var countTo = account.remainTime + now.valueOf();

		//start count
		jQuery(this.el.nativeElement).find('.timer').countdown(countTo, function (event) {
			var $this = jQuery(this);
			switch (event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "weeks":
				case "daysLeft":
					$this.find('span.' + event.type).html(event.value);
					break;
				case "finished":
					$this.hide();
					this.lifeComplete = true;
					break;
			}
		});
	}

	toReincarnate(){
		let link = ['/toreincarnate'];
		this.appService.routeTo('/toreincarnate');
	}

	navigateTo(url){
		this.appService.routeTo('/'+url);
	}
}