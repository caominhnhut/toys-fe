import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './model/menu';
import { AuthenticaticationService } from './services/authenticatication.service';
import { DataService } from './services/data.service';
import { AppSettings } from './utility/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	private url : string = "/no-auth/menus";

	public menus : Menu[];

	constructor(private dataService: DataService,
		public authService: AuthenticaticationService,
		private router: Router){}

	ngOnInit(): void {
		this.checkAuthentication();
		this.getMenues();
	}

	logout(){
		this.authService.isAuthenticated = false;
		this.authService.alias = null;
		localStorage.clear();
		this.router.navigate(['index']);
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

	private checkAuthentication(){
		var alias = localStorage.getItem(AppSettings.ALIAS);
		if(alias){
			this.authService.isAuthenticated = true;
			this.authService.alias = alias; 
		}
	}
}
