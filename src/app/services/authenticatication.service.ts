import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticaticationService {

  constructor() { }

  public isAuthenticated : boolean = false;

  public token: string;

  public alias : string;
}
