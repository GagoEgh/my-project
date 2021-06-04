import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModeratorServService } from './moderator-serv.service';
import { map, switchMap } from 'rxjs/operators';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
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
      tell: [null, [Validators.required, this.validNumber, Validators.minLength(6), Validators.maxLength(6)]],
      phoneNumberPrefix: ['091', [Validators.required]]
    })
    this.showTable().subscribe();
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
    else if (this.validateForm.get(formName)?.hasError('minlength') || this.validateForm.get(formName)?.hasError('maxlength')) {
      this.serv.erroreMesage = 'թվերի քանակը պետք է լինի 6';
    } else this.serv.erroreMesage = '';
    return this.serv.erroreMesage;
  }

  showModal(): void {

    this.isVisible = true;
  }

  handleOk(): void {
    if (this.validateForm.valid) {

      let phone_number = this.validateForm.get('phoneNumberPrefix')?.value + this.validateForm.get('tell')?.value;
      let user = {
        first_name: this.validateForm.get('frstname')?.value,
        image: '',
        last_name: this.validateForm.get('lastname')?.value,
        phone_number: phone_number,
        username: this.validateForm.get('username')?.value,
      }

      this.serv.dataPost(user).pipe(switchMap((e: any) => {
        return this.showTable()
      })).subscribe(() => {
        this.isVisible = false;
        this.validateForm.reset()
      });


    }

  }

  showTable() {
    return this.serv.getDatas().pipe(map((el: any) => {
      this.listOfData = el.results;

    }))
  }

  handleCancel(): void {
    this.isVisible = false;
    this.validateForm.reset()
  }


  // table

  listOfData: any[] = [];
  onQueryParamsChange(event: NzTableQueryParams) {

    this.serv.pageIndex = event.pageIndex;
   console.log(event);
   
   this.showTable().subscribe()
  }

}
