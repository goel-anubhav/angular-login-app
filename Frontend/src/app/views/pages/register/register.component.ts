import { Component, OnInit } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
      ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective,ReactiveFormsModule,HttpClientModule],
      providers:[AuthService]
})
export class RegisterComponent implements OnInit{
  register:FormGroup | any;
  constructor(private _auth:AuthService,private _router:Router,private _fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.register = this._fb.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      cnfrmPassword:['',Validators.required],
      profilePicture: ['']
    })
  }
  submitForm(){
    this._auth.register(this.register.value).subscribe((response)=>{
      console.log('<-----Api reponse------>',response)
      this._router.navigate(['/login'])
    })
  }
}
