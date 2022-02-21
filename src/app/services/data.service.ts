import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { AuthenticaticationService } from './authenticatication.service';
import { AppSettings } from '../utility/constant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
	private HOST = "http://localhost:8081";
	
	constructor(private httpClient: HttpClient, public authenticationService: AuthenticaticationService) { }

	public sendFormDataRequest(url: string, formData: FormData):Observable<HttpEvent<any>>{

		let endPoint = this.HOST.concat(url);

		var request = new HttpRequest('POST', endPoint, formData, {
			reportProgress: true,
			responseType: 'json',
		});

		request = request.clone({
			setHeaders: {Authorization: `Bearer ${this.authenticationService.token}`}
		});

		return this.httpClient.request(request);
	}

	public sendGetRequest(url: string){
		let endPoint = this.HOST.concat(url);
		
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json'
			})
		};

		let token = localStorage.getItem(AppSettings.TOKEN);
		if(token){
			let accessToken = "Bearer "+token;
			httpOptions.headers = httpOptions.headers.set('Authorization', accessToken);
		}

		return this.httpClient.get(endPoint, httpOptions).pipe(catchError(this.handleError));
	}

	public sendPostRequest(url: string, data: any): Observable<any>{
		let endPoint = this.HOST.concat(url);
		
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json'
			})
		};

		if(this.authenticationService.token){
			const accessToken = "Bearer "+this.authenticationService.token;
			httpOptions.headers = httpOptions.headers.set('Authorization', accessToken);
		}

    	const body=JSON.stringify(data);
		return this.httpClient.post(endPoint, body, httpOptions);
	}

	handleError(error: HttpErrorResponse) {
		let errorMessage = 'Unknown error!';
		if (error.error instanceof ErrorEvent) {
		  // Client-side errors
		  errorMessage = `Error: ${error.error.message}`;
		} else {
		  // Server-side errors
		  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
