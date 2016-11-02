/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, Input } from '@angular/core';
import { Account } from '../entity/account';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'propoperator',
	templateUrl: 'app/login/property-operator.component.html'
})

export class PropertyOperatorComponent {

	_operateObj: string;
	@Input() account: Account;

	@Input() set operateObj(operateObj: string) {
		this._operateObj = operateObj || this._operateObj;
	}

	add(num) {

		var ableNum = 0;

		switch (this._operateObj) {
			case "power":
				ableNum = this.getAbleNum(num,this.account.addPow)
				this.account.addPow += ableNum;
				break;
			case "def":
				ableNum = this.getAbleNum(num,this.account.addDef)
				this.account.addDef += ableNum;
				break;
			case "dex":
				ableNum = this.getAbleNum(num,this.account.addDex)
				this.account.addDex += ableNum;
				break;
			case "inte":
				ableNum = this.getAbleNum(num,this.account.addInt)
				this.account.addInt += ableNum;
				break;
			case "hp":
				ableNum = this.getAbleNum(num,this.account.addHp)
				this.account.addHp += ableNum;
				break;
			default:
				break;
		}

		this.account.soul-=ableNum;
	}

	getAbleNum(addValue,propValue){
		return Math.max(Math.min(this.account.soul,addValue),0-propValue);
	}
}