import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { NetMessage } from './entity/netmessage';
import { Router } from '@angular/router';
import { Account } from './entity/account';

@Injectable()
export class AppService {

	public baseUrl = 'http://localhost:8080';
	public headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
	lang: string;

	private msgReceivedSource = new Subject<NetMessage>();
	msgReceived$ = this.msgReceivedSource.asObservable();

	receiveMsg(netMessage: NetMessage) {
		this.msgReceivedSource.next(netMessage);
	}


	constructor(public http: Http, private router: Router) {
		var arr = document.cookie.match(new RegExp("(^| )lang=([^;]*)(;|$)"));
		if (arr != null) {
			this.lang = arr[2];
		} else {
			this.lang = navigator.language;
		}
	}

	getData(url: string, withCredentials: boolean) {
		return this.http.get(this.baseUrl + '/' + url, { withCredentials: withCredentials }).toPromise().then(response => this.check(response.json()), error => this.serverError());
	}

	postData(url: string, data: Object) {
		return this.http.post(this.baseUrl + '/' + url, JSON.stringify(data), { headers: this.headers }).toPromise().then(response => this.check(response.json()), error => this.serverError());
	}

	check(netMessage: NetMessage) {
		if (netMessage.content == 'account_invalid') {
			let link = ['/login'];
			this.router.navigate(link);
			this.receiveMsg(new NetMessage(netMessage.type, netMessage.content, true));
			netMessage.content = '';
		}
		return netMessage;
	}

	public serverError() {
		this.receiveMsg(new NetMessage("danger", "server_error", true));
		return Promise.reject('server-error');
	}

	public routeTo(url){
		let link = [url];
		this.router.navigate(link);
	}
}