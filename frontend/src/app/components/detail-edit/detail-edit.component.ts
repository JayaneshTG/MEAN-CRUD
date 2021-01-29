import { Detail } from './../../model/detail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  detailData: Detail[];
  DetailProfile: any = ['Male', 'Female', 'Other']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.updateDetail();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getDetail(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  //Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('gender').setValue(e, {
      onlySelf: true
    })
  }

  //getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getDetail(id) {
    this.ApiService.getDetail(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        age: data['age'],
        gender: data['gender'],
        phoneNumber: data['phoneNumber']
      });
    });
  }


  updateDetail() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })

  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.ApiService.updateDetail(id, this.editForm.value)
        .subscribe(res => {
          this.router.navigateByUrl('/details-list');
          console.log('Content updated successfully!');
        }, (error) => {
          console.log(error)
        });
      };
    };
  };

};
