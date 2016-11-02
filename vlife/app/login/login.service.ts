import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from '../entity/account'
import { Subject } from 'rxjs/Subject';
import { AppService } from '../app.service';

@Injectable()
export class LoginService{

	constructor(private appService:AppService){
		
	}

	getLoginAccount():Promise<Account>{
		return this.appService.getData('getLoginAccount',true);
	}

	login(account){
		return this.appService.postData('login',account);
	}

	loginOut(){
		return this.appService.postData('loginOut',{});
	}
}