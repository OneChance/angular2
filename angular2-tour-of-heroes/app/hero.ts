export class Hero {
  id: number;
  name: string;
  state:string;

  constructor(id,name){
  	this.id = id;
  	this.name = name;
  	this.state = 'inactive';
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}