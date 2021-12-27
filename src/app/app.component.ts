import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	private url : string = "/no-auth/menus";

	public menus : Menu[];

	constructor(private dataService: DataService){}

	ngOnInit(): void {
		this.getMenues();
	}

	private getMenues(){
		this.dataService.sendGetRequest(this.url).subscribe((menus: Menu[]) => {
			this.menus = menus;
			this.menus.forEach((menu) => {
				menu.endpoint = this.buildEndpoint(menu.id, menu.alias);
			});
		});
	}

	private buildEndpoint(id: string, alias: string) : string {
		return alias.concat("/").concat(id);
	}
}
