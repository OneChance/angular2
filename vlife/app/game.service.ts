import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from './entity/account'
import { Subject } from 'rxjs/Subject';
import { Message } from './entity/message';

@Injectable()
export class GameService{

	private accountUrl = 'http://localhost:8080';

	private msgReceivedSource = new Subject<Message>();
	msgReceived$ = this.msgReceivedSource.asObservable();

	reveiveMsg(msg: Message) {
    	this.msgReceivedSource.next(msg);
  	}


	constructor(private http:Http){}

	getLoginAccount():Promise<Account>{
		return this.http.get(this.accountUrl+'/getLoginAccount',{withCredentials:true}).toPromise().then(response=>response.json()).catch(this.handleError);
	}

	login(account){
		let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
		return this.http.post(this.accountUrl+'/login',JSON.stringify(account),{headers:headers}).toPromise().then(res=>res.json()).catch(this.handleError);
	}

	private handleError(error:any){
		return Promise.reject(new Message('danger','服务器异常'));
	}
}