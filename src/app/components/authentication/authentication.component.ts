import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/factory/validation.service';
import { AuthenticaticationService } from 'src/app/services/authenticatication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private dataService: DataService,
    private validateService: ValidationService,
    private authService: AuthenticaticationService,
    private router: Router ) {}

  email: string;
  password: string;
  alias: string;
  errorMessage: string;
  hasError: boolean = false;
  isDisabled: boolean = false;

  ngOnInit(): void {
  }

  public authenticate() {

    var _this = this;   

    _this.hasError = _this.validate();
    if(_this.hasError){
      return;
    }

    _this.isDisabled = true;

    var url = "/authenticate";

    var credential = {
      userName: _this.email,
      password: _this.password
    }

    _this.dataService.sendPostRequest(url, credential).subscribe({
      next: response => {
        console.log("token: ", response.token);
        _this.authService.isAuthenticated = true;
        _this.authService.token = response.token;
        _this.authService.alias = _this.email.substring(0, 1);
        _this.cleanUp();
        _this.router.navigate(['index']);
      },
      error: errorObject => {
        _this.hasError = true;
        _this.isDisabled = false;
        _this.errorMessage = errorObject.error.detail;
      }
    });
  }

  private validate(): boolean {
    try{
      this.validateService.validateEmail(this.email);
      this.validateService.validatePassword(this.password);
      return false;
    }catch(e){
      this.errorMessage = e.message;
      return true;
    }
  }

  private cleanUp(){
    this.email = "";
    this.password = "";
    this.errorMessage = "";
    this.hasError = false;
    this.isDisabled = false;
  }

}
