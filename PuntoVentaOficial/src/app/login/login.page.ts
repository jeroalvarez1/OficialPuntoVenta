import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from '../alerts/alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public formBuilder: FormBuilder, private alertsService: AlertsService){
    this.formularioLogin = this.formBuilder.group({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  login() { 
    if (this.formularioLogin.invalid) {
      this.alertsService.emptyForm();
    } else {
      console.log(this.formularioLogin.value)
      //search by email - confirm password
    }
  }

}
