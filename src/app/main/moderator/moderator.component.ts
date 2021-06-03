import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModeratorServService } from './moderator-serv.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  validateForm: FormGroup = new FormGroup({});
  isVisible = false;

  constructor(private fb: FormBuilder, public serv: ModeratorServService) { }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      frstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      username: [null, [Validators.required]],
      tell: [null, [Validators.required, this.validNumber, Validators.minLength(6),Validators.maxLength(6)]],
      phoneNumberPrefix: [null, [Validators.required]]
    })
  }



  validNumber(confirm: FormControl) {
    let regExp = /[0-9]/
    if (regExp.test(confirm.value)) {
      return null
    } else {
      return { erroreNumber: true }
    }
  }

  message(formName: string) {
    if (this.validateForm.get(formName)?.hasError('required')) this.serv.erroreMesage = 'սա պարտադիր դաշտ է'
    else if (this.validateForm.get(formName)?.hasError('erroreNumber')) this.serv.erroreMesage = 'գրել միայն թիվ'
    else if(this.validateForm.get(formName)?.hasError('minlength')||this.validateForm.get(formName)?.hasError('maxlength')){
      this.serv.erroreMesage = 'թվերի քանակը պետք է լինի 6';
    }else this.serv.erroreMesage = '';
    return this.serv.erroreMesage;
  }
  
  showModal(): void {
 
    this.isVisible = true;
  }

  handleOk(): void {
    console.log(this.validateForm);
    this.isVisible = false;
  }

  handleCancel(): void {

    this.isVisible = false;
  }

}
