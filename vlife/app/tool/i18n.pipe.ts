import { Pipe, PipeTransform } from '@angular/core';
import { GameService } from '../game.service';
import { lang } from './lang';

@Pipe({name: 'translate'})
export class Translate implements PipeTransform {

  constructor(private gameService:GameService){}

  transform(value: string): string {
  	if(value)
    	return lang[value][this.gameService.lang];
    else
    	return '';
  }
}