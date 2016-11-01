import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { Message } from './entity/message';

@Injectable()
export class AppService{

	public baseUrl = 'http://localhost:8080';
	public headers = new Headers({'Content-Type':'application/json;charset=UTF-8'});
	lang:string;

	private msgReceivedSource = new Subject<Message>();
	msgReceived$ = this.msgReceivedSource.asObservable();

	receiveMsg(msg: Message) {
    	this.msgReceivedSource.next(msg);
  	}


	constructor(public http:Http){
		var arr = document.cookie.match(new RegExp("(^| )lang=([^;]*)(;|$)"));  
	    if(arr != null){ 
	    	this.lang = arr[2];
	    }else{
			this.lang = navigator.language;
	    }
	}

	getData(url:string,withCredentials:boolean){
		return this.http.get(this.baseUrl+'/'+url,{withCredentials:withCredentials}).toPromise().then(response=>response.json(),error=>this.serverError());
	}

	postData(url:string,data:Object){
		return this.http.post(this.baseUrl+'/login',JSON.stringify(data),{headers:this.headers}).toPromise().then(res=>res.json(),error=>this.serverError());
	}

	public serverError(){
		this.receiveMsg(new Message("danger","serverError",true));
		return Promise.reject('server-error');
	}
}