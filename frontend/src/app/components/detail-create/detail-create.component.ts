import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-create',
  templateUrl: './detail-create.component.html',
  styleUrls: ['./detail-create.component.css']
})
export class DetailCreateComponent implements OnInit {
  submitted = false;
  detailForm: FormGroup;
  DetailProfile:any = ['Male', 'Female', 'Other']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.detailForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  //Choose gender with select dropdown
  updateProfile(e){
    this.detailForm.get('gender').setValue(e, {
      onlySelf: true
    })
  }

  //Getter to access from control
  get MyForm(){
    return this.detailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.detailForm.valid) {
      return false;
    } else {
      this.apiService.createDetail(this.detailForm.value).subscribe(
        (res) => {
          console.log('Detail successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/details-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
