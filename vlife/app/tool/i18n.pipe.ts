import { Pipe, PipeTransform } from '@angular/core';
import {GameService} from '../game.service';

@Pipe({name: 'translate'})
export class Translate implements PipeTransform {

  constructor(private gameService:GameService){}

  transform(value: string): string {
  	
    return "123";
  }
}