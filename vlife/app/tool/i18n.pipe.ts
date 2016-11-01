import { Pipe, PipeTransform } from '@angular/core';
import { lang } from './lang';
import { AppService } from '../app.service';

@Pipe({name: 'translate'})
export class Translate implements PipeTransform {

  constructor(private appService:AppService){}

  transform(value: string): string {
  	if(value)
    	return lang[value][this.appService.lang];
    else
    	return '';
  }
}