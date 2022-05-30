import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Subscription} from "rxjs";
import {UsersService} from "../service/users.service";
import {UserDetailResponse} from "../type/UserDetailResponse";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UserspageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  getUserSubscription: Subscription;
  userDetailResp: UserDetailResponse;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.userDetailResp = {results: []};
    this.registerForm = this.formBuilder.group({
      min: ['0.0'],
      max: ['4000.0'],
      limit: [''],
      offset: ['0'],
      sort: ['',]
    })
  }

  showSuccess(val) {
    let limitMsg = "";
    let sortMsg = "";
    if (val.limit !== "") {
      limitMsg = val.limit;
    } else {
      limitMsg = "No Limit";
    }

    if (val.sort !== "") {
      sortMsg = val.sort;
    } else {
      sortMsg = "No Sort";
    }
    const uploadParams = `min: ${val.min} `
      + `max: ${val.max} `
      + `limit: ${limitMsg} `
      + `offset: ${val.offset} `
      + `sort: ${sortMsg} `
    this.toastr.success(uploadParams, "Submitted ", {timeOut: 5000});
  }

  showError(msg) {
    this.toastr.error(msg, "Failed to get users", {timeOut: 5000});
  }

  onSubmit(): void {
    this.submitted = true;
    const {min: min, max: max, limit: limit, offset: offset, sort: sort} = this.registerForm.value

    if (this.registerForm.invalid) {
      return;
    }
    this.getUserSubscription = this.usersService.getUsers(
      min,
      max,
      offset,
      limit,
      sort).subscribe(u => {
        this.userDetailResp = u;
        this.showSuccess(this.registerForm.value);
      },
      err => {
        const errorStatus = err.status;
        const errorMsg =  ` Error ${errorStatus}: ` + err.error.error;
        this.showError(errorMsg);
      });

    this.reset();
  }

  reset(): void {
    this.submitted = false;
    this.registerForm.reset({
      min: '0.0',
      max: '4000.0',
      offset: '0',
      limit: '',
      sort: ''
    });
  }
}
