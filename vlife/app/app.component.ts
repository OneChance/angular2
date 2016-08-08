import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { GameService } from './game.service';
import { Message } from './entity/message';

@Component({
	selector:'app',
	templateUrl:'app/app.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers:[GameService],
	precompile:[LoginComponent,ProfileComponent]
})

export class AppComponent{
	msg:Message;

	constructor(private gameService:GameService){
		gameService.msgReceived$.subscribe(msg=>this.setMsg(msg));
	}

	setMsg(msg:Message){
		this.msg = msg;
		var msgRef = this.msg;
		setTimeout(function(){
  			msgRef.content = '';
  		},2000);
	}
}