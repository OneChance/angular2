export class Message{
	public type:string;
	public content:string;
	public autoClose:boolean;

	constructor(type:string,content:string,autoClose:boolean){
		this.type = type;
		this.content = content;
		this.autoClose = autoClose;
	}
}