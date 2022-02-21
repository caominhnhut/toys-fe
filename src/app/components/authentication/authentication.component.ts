import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/factory/validation.service';
import { AuthenticaticationService } from 'src/app/services/authenticatication.service';
import { DataService } from 'src/app/services/data.service';
import { AppSettings } from 'src/app/utility/constant';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private dataService: DataService,
    private validateService: ValidationService,
    public authService: AuthenticaticationService,
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
        _this.authService.isAuthenticated = true;
        _this.authService.token = response.token;

        let index = _this.email.indexOf("@");
        if(index > 5){
          index = 5;
        }
        _this.authService.alias = _this.email.substring(0, index);

        localStorage.setItem(AppSettings.ALIAS, _this.authService.alias);
        localStorage.setItem(AppSettings.TOKEN, _this.authService.token);

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
