import { Injectable } from '@angular/core';
import { Category, Product } from '../model/model';
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

  public validateProductCreation(product: Product) {
    if(!product.code || product.code == ""){
      throw new Error(Message.PRODUCT_CODE_EMPTY);
    }

    if(!product.name || product.name == ""){
      throw new Error(Message.PRODUCT_NAME_EMPTY);
    }

	if(!product.amount || product.amount == 0){
		throw new Error(Message.PRODUCT_AMOUNT_EMPTY);
	}

	if(!product.costPrice){
		throw new Error(Message.PRODUCT_COST_PRICE_EMPTY);
	}

	if(!product.price){
		throw new Error(Message.PRODUCT_PRICE_EMPTY);
	}

	if(!product.description || product.description == ""){
		throw new Error(Message.PRODUCT_DESC_EMPTY);
	}

	if(product.price - product.costPrice < 5000){
		throw new Error(Message.PRODUCT_PROFIT_INVALID);
	}
  }

	public validateCategory(category: Category) {
		if(!category){
			throw new Error(Message.CATEGORY_EMPTY);
		}
	}
}
