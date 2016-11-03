import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { NetMessage } from './entity/netmessage';
import { Translate } from './tool/i18n.pipe';
import { AppService } from './app.service';
import { PropertyComponent } from './role/property.component'; 
import { LoginComponent } from './login/login.component'; 
import { ProfileComponent } from './role/profile.component'; 

@Component({
	selector:'app',
	templateUrl:'app/app.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers:[AppService],
	animations:[
		trigger('msgState',[
			transition('void => *', [animate('500ms ease-in', keyframes([style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
														   style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
														   style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      													  ]))]),
			transition('* => void', [animate('500ms ease-out', keyframes([style({opacity: 1, transform: 'translateX(0)',offset: 0}),
															 style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
														     style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
														 ]))])
		])
	],
	pipes: [Translate],
	precompile:[PropertyComponent,LoginComponent,ProfileComponent]
})

export class AppComponent{
	msg:NetMessage;

	constructor(private appService:AppService){
		appService.msgReceived$.subscribe(msg=>this.setMsg(msg));	                
	}

	setMsg(msg:NetMessage){
		this.msg = msg;		
		var msgRef = this.msg;
		if(msg.autoClose){
			setTimeout(function(){
  				msgRef.content = '';
  			},2000);
		}		
	}
}