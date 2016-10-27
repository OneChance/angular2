/// <reference path="../typings/jquery/jquery.d.ts" />
import { Component,ElementRef,Inject} from '@angular/core';
import { GameService } from './game.service';
import { Router } from '@angular/router';
import { Account } from './entity/account';
import { Message } from './entity/message';
import { Translate } from './tool/i18n.pipe';

declare var jQuery:JQueryStatic;

@Component({
	selector:'my-app',
	templateUrl:'app/profile.component.html',
	pipes: [Translate]
})

export class ProfileComponent{

	account:Account;
	lifeComplete:boolean = false;
	profileImg:string="images/profile.png";

	constructor(private gameService:GameService,private router:Router,private el:ElementRef){
		this.gameService.getLoginAccount().then(account=>this.checkAccount(account));
	}

	info(){
		alert('detail');
	}

	signOut(){
		alert('sign out');
	}

	checkAccount(account:Account){
		if(!account.name){
			let link = ['/login'];
			this.router.navigate(link);
		}else{
			this.account = account;
			this.profileImg = "images/"+account.species.name+"/"+account.level+".png";

			var now = new Date();
			var countTo = account.remainTime + now.valueOf();

			//start count
			jQuery(this.el.nativeElement).find('.timer').countdown(countTo, function(event) {  
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
	                    //jQuery("#reincarnateButton").show();
	                    break;
	            }
	        });
		}
	}
}