import { Species } from './species';
import { NetMessage } from './netmessage';

export class Account extends NetMessage{
	public id:number;
	public enterType:string;
	public account:string;
	public password:string;
	public name:string;
	public sex:string;
	public msg:string;
	public level:number;
	public species:Species;
	public remainTime:number;
	public soul:number;
	public exp:number;
	public hp:number;
	public addHp:number;
	public addPow:number;
	public addDef:number;
	public addDex:number;
	public addInt:number;
	public soulget:number;
	public region:number;

	constructor(){
		super("","",true);
	}
}