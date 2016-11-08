export class NetMessage{
	public type:string;
	public content:string;
	public autoClose:boolean;

	constructor(type:string,content:string,autoClose:boolean){
		this.type = type;
		this.content = content;
		this.autoClose = autoClose;
	}

	public static DANGER:string = "danger";
	public static SUCCESS:string = "success";
}