import {Component, Input, OnInit} from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import {UserDetailResponse} from "../type/UserDetailResponse";
import {UserDetailDTO} from "../type/UserDetailDTO";

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.scss']
})
export class UserstableComponent implements OnInit {

  public configuration: Config;
  public columns: Columns[];
  @Input() userList: UserDetailDTO[]

  constructor() { }


  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.columns = [
      { key: 'name', title: 'Name' },
      { key: 'salary', title: 'Salary' },
    ];
  }

}
