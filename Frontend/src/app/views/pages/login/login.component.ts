import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AuthService} from '../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle,ReactiveFormsModule],
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup | any;

  constructor(
    private _fb:FormBuilder,
    private _auth:AuthService,
    private _router:Router
  ) { }
  ngOnInit(): void {
    this.loginForm=this._fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm(){
    this._auth.login(this.loginForm.value).subscribe((response:any)=>{
      this._auth.setToken(response.respData.jwtToken)
        this._router.navigate(['/dashboard'])
    })
  }
  register(){
    this._router.navigate(['/register'])
  }
}
