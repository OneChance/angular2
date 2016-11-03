/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, Input } from '@angular/core';
import { Account } from '../entity/account';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'propoperator',
	templateUrl: 'app/role/property-operator.component.html'
})

export class PropertyOperatorComponent {

	_operateObj: string;
	@Input() account: Account;

	@Input() set operateObj(operateObj: string) {
		this._operateObj = operateObj || this._operateObj;
	}

	add(num) {
		var ableNum  = Math.max(Math.min(this.account.soul,num),0-this.account[this._operateObj]);
		this.account[this._operateObj] += ableNum;
		this.account.soul-=ableNum;
	}
}