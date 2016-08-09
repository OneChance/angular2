import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { GameService } from './game.service';
import { Message } from './entity/message';
import { Translate } from './tool/i18n.pipe';

@Component({
	selector:'app',
	templateUrl:'app/app.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers:[GameService],
	precompile:[LoginComponent,ProfileComponent],
	animations:[
		trigger('msgState',[
			transition('void=>*', [animate(500, keyframes([style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
														   style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
														   style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      													  ]))]),
			transition('*=>void',[animate("0.5s", keyframes([style({opacity: 1, transform: 'translateX(0)',offset: 0}),
															 style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
														     style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
														 ]))])
		])
	],
	pipes: [Translate]	
})

export class AppComponent{
	msg:Message;

	constructor(private gameService:GameService){
		gameService.msgReceived$.subscribe(msg=>this.setMsg(msg));	                
	}

	setMsg(msg:Message){
		this.msg = msg;
		var msgRef = this.msg;
		if(msg.autoClose){
			setTimeout(function(){
  				msgRef.content = '';
  			},2000);
		}		
	}
}