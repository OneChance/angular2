/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, ElementRef, Inject } from '@angular/core';
import { Account } from '../entity/account';
import { Translate } from '../tool/i18n.pipe';
import { RegionService } from './region.service';
import { AppService } from '../app.service';
import { NetMessage } from '../entity/netmessage';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'my-app',
	templateUrl: 'app/region/region.component.html',
	pipes: [Translate],
	providers: [RegionService]
})

export class RegionComponent {


	constructor(private regionService: RegionService,private appService:AppService, private el: ElementRef) {
		this.regionService.getRegionData().then(netMessage=>this.setRegionData(netMessage));
	}

	toProfile(){
		this.appService.routeTo('/profile');
	}

	setRegionData(netMessage:NetMessage){
		if(netMessage.content){
			alert(netMessage.content);
		}
	}
}