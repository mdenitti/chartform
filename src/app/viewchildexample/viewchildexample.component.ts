import { Component, OnInit, ViewChild } from '@angular/core';
import { myUsers } from '../models/myUsers';

@Component({
  selector: 'app-viewchildexample',
  templateUrl: './viewchildexample.component.html',
  styleUrls: ['./viewchildexample.component.css']
})
export class ViewchildexampleComponent implements OnInit {

  // as alterntive to 2 way data binding with ngmodel; use viewchild
  // Be advised that this is not the best practice and a pain in the ass
  // Also mind the allocation of the reset values... and the use of the nativeElement.value below

  @ViewChild('name') name: any;
  @ViewChild('email') email: any;

  totalusers: any = [];
  myUsers!: myUsers;

  addUsers(arg0: string, arg1: string) {
    this.myUsers = {
      name: arg0,
      email: arg1
    }
    this.totalusers.push(this.myUsers);
    
    this.name.nativeElement.value = '';
    this.email.nativeElement.value = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
