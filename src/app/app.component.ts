import { Component } from '@angular/core';
import { myUsers } from './models/myUsers';
// export interface myUsers {
//   name: string;
//   email: string;
//   phone?: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor() {
  // used to initialize the the attributes
  this.myUsers = {
    name: '',
    email: ''
  };
  this.name = '';
  this.email = '';
 }

addUsers() {
    // add the user to the list
    this.myUsers = {
      name: this.name,
      email: this.email,
      
    }
    this.users.push(this.myUsers);
    // clear the form
    this.name = '';
    this.email = '';
}

  // intention is a nice clean way to show the used attributes
  showDataUsers: any = [];
  showDataEmails: any  = [];
  name:string;
  email:string;
  myUsers: myUsers;

  // create a list of users
  users = [
    {name: 'John', email: 'john@johnny.com'},
    {name: 'Jane', email: 'jane@jannie.com'},
    {name: 'Jack', email: 'jack@jacky.com'}
  ]

  // transform the name to uppercase and lowercase instantly
  // because the name is a two-way binding
  transformToUpperCase() {
    this.name = this.name.toUpperCase();
    this.email = this.email.toUpperCase();
  }

  transformToLowerCase() {
    this.name = this.name.toLowerCase();
    this.email = this.email.toLowerCase();
  }

  showUsers() {
    this.showDataUsers = this.users.map(user => user.name);
    
  }

  showEmails() {
    this.showDataEmails = this.users.map(user => user.email);
  }

}
