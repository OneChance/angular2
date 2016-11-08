import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from '../entity/account'
import { Subject } from 'rxjs/Subject';
import { AppService } from '../app.service';

@Injectable()
export class RegionService{

	constructor(private appService:AppService){
		
	}

	getRegionData(){
		return this.appService.getData('region',true);
	}

}