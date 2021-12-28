import { Injectable } from '@angular/core';
import { Expression, Message } from '../utility/constant';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateEmail(email: string) {
    if(email === ""){
      throw new Error(Message.EMPTY_EMAIL_ERROR);
    }
    
    if(!Expression.EMAIL_REGEX.test(email)){
      throw new Error(Message.EMAIL_FORMAT_ERROR);
    }
  }

  public validatePassword(password: string) {    
    if(!Expression.PASSWORD_REGEX.test(password)){
      throw new Error(Message.PASSWORD_FORMAT_ERROR);
    }
  }

  public validateConfirmedPassword(password: string) {    
    if(!Expression.PASSWORD_REGEX.test(password)){
      throw new Error(Message.CONFIRMED_PASSWORD_FORMAT_ERROR);
    }
  }

  public validatePasswordMatching(password: string, confirmedPassword: string) {
    if(password !== confirmedPassword){
      throw new Error(Message.PASSWORD_NOT_MATCH_ERROR);
    }
  }
}
