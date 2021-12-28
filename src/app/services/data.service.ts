import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
	private HOST = "http://localhost:8081";
	
	constructor(private httpClient: HttpClient) { }

	public sendGetRequest(url: string){
		let endPoint = this.HOST.concat(url);
		return this.httpClient.get(endPoint).pipe(catchError(this.handleError));
	}

	public sendPostRequest(url: string, data: any): Observable<any>{
		let endPoint = this.HOST.concat(url);
		const headers = { 'content-type': 'application/json'}  
    	const body=JSON.stringify(data);
		return this.httpClient.post(endPoint, body, {'headers':headers});
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
