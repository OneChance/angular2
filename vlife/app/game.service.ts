import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from './entity/account'
import { Subject } from 'rxjs/Subject';
import { Message } from './entity/message';

@Injectable()
export class GameService{

	private baseUrl = 'http://localhost:8080';
	lang:string;

	private msgReceivedSource = new Subject<Message>();
	msgReceived$ = this.msgReceivedSource.asObservable();

	receiveMsg(msg: Message) {
    	this.msgReceivedSource.next(msg);
  	}


	constructor(private http:Http){
		var arr = document.cookie.match(new RegExp("(^| )lang=([^;]*)(;|$)"));  
	    if(arr != null){ 
	    	this.lang = arr[2];
	    }else{
			this.lang = navigator.language;
	    }
	}

	getLoginAccount():Promise<Account>{
		return this.http.get(this.baseUrl+'/getLoginAccount',{withCredentials:true}).toPromise().then(response=>response.json(),error=>this.serverError());
	}

	login(account){
		let headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
		return this.http.post(this.baseUrl+'/login',JSON.stringify(account),{headers:headers}).toPromise().then(res=>res.json(),error=>this.serverError());
	}

	private serverError(){
		this.receiveMsg(new Message("danger","serverError",true));
		return Promise.reject('server-error');
	}
}