import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { AuthenticaticationService } from './authenticatication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
	private HOST = "http://localhost:8081";
	
	constructor(private httpClient: HttpClient, public authenticationService: AuthenticaticationService) { }

	public upload(url: string, formData: FormData):Observable<HttpEvent<any>>{

		let endPoint = this.HOST.concat(url);
		const accessToken = "Bearer "+this.authenticationService.token;

		var req = new HttpRequest('POST', endPoint, formData, {
			reportProgress: true,
			responseType: 'json',
		});

		req = req.clone({
			setHeaders: {Authorization: `${accessToken}`}
		});

		return this.httpClient.request(req);
	}

	public sendGetRequest(url: string){
		let endPoint = this.HOST.concat(url);
		return this.httpClient.get(endPoint).pipe(catchError(this.handleError));
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

	public sendFormDataRequest(url: string, data: any): Observable<any>{
		let endPoint = this.HOST.concat(url);
		
		const httpOptions = {
			headers: new HttpHeaders({				
				'Content-Type':  'application/x-www-form-urlencoded'
			})
		};

		if(this.authenticationService.token){
			const accessToken = "Bearer "+this.authenticationService.token;
			httpOptions.headers = httpOptions.headers.set('Authorization', accessToken);
		}

		return this.httpClient.post(endPoint, data, httpOptions);
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
