import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ValidationService } from 'src/app/factory/validation.service';
import { Account } from 'src/app/model/account';
import { DataService } from 'src/app/services/data.service';
import { Expression, Message } from 'src/app/utility/constant';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  public userName: string;
  public password: string;
  public confirmedPassword: string;
  public errorMessage: string;
  public hasError: boolean = false;
  public isDisabled: boolean = false;

  private url: string = "/no-auth/account";

  constructor(
    private dataService: DataService,
    private validateService: ValidationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public register(){
    
    this.hasError = this.validate();
    if(this.hasError){
      return;
    }

    const account: Account = {
			userName: this.userName,
      password: this.password,
      roles: ["ROLE_CUSTOMER"]
		};

    this.isDisabled = true;

    this.dataService.sendPostRequest(this.url, account)
    .subscribe({
      next: accountId => {
        this.cleanUp();
        this.router.navigate(['index']);
      },
      error: errorResponse => {
        this.hasError = true;
        this.isDisabled = false;
        this.customerErrorMessage(errorResponse.error.detail);
      }
    })
  }

  private validate(): boolean {
    try{
      this.validateService.validateEmail(this.userName);
      this.validateService.validatePassword(this.password);
      this.validateService.validateConfirmedPassword(this.confirmedPassword);
      this.validateService.validatePasswordMatching(this.password, this.confirmedPassword);
      return false;
    }catch(e){
      this.errorMessage = e.message;
      return true;
    }
  }

  private cleanUp(){
    this.userName = "";
    this.password = "";
    this.confirmedPassword = "";
    this.errorMessage = "";
    this.hasError = false;
    this.isDisabled = false;
  }

  private customerErrorMessage(errorMessage: string){
    if(errorMessage.includes('duplicate key value violates unique constraint')){
      this.errorMessage = "Email đã tồn tại. Vui lòng chọn email khác";
    }
  }
}
