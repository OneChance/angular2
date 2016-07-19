export class InMemoryDataService{
	createDb(){
		let heroes = [
		  { id: 11, name: '战士' },
		  { id: 12, name: '法师' },
		  { id: 13, name: '术士' },
		  { id: 14, name: '萨满' },
		  { id: 15, name: '圣骑士' },
		  { id: 16, name: '猎人' },
		  { id: 17, name: '盗贼' },
		  { id: 18, name: '牧师' },
		  { id: 19, name: '死亡骑士' },
		  { id: 20, name: '恶魔猎手' }
		];

		return  {heroes};
	}
}