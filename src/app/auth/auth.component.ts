
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
  validateForm: FormGroup = new FormGroup({});

  constructor(private form: FormBuilder, public url: AuthServiceService,private router:Router) { }
  ngOnInit(): void {
    this.validateForm = this.form.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }


  submitForm() {
    let obj = {
      username: this.validateForm?.get('userName')?.value,
      password: this.validateForm?.get('password')?.value
    }
    
    this.url.loginPost(obj).subscribe((el: any) => {
      document.cookie = 'role =' + el.role_code;
      document.cookie = 'access =' + el.token;
      
      localStorage.setItem('user',JSON.stringify(el.user.user))
      this.router.navigate(['/dashboard'])
    },(err)=>{
      this.url.errorMessage = err.error.message;
    })

  }
}
