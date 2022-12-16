import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

addUsers() {
    // add the user to the list
    this.users.push({name: this.name, email: this.email});
    // clear the form
    this.name = '';
    this.email = '';
}
  title = 'chartform';
  name = '';
  email = '';

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
}
