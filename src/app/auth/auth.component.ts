import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, public url: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }


  submitForm(): void {
    //if(this.validateForm.invalid){return}
    let obj = {
      password: this.validateForm.get('password')?.value,
      username: this.validateForm.get('userName')?.value,
    }
  
    this.url.loginPost(obj).subscribe((el:any)=>{

      let ob = JSON.stringify(el);
      localStorage.setItem('token', JSON.stringify(el.token));
      this.url.token = localStorage.getItem('token');
      this.router.navigate(['/dashboard'])
    },(el:HttpErrorResponse )=>{
  
      this.url.errorMessage = el.error.message;
    })
  }


}
