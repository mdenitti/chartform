import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients() {
    return [
      {id: 1, name: 'John Doe'},
      {id: 2, name: 'Jane Doe'},
      {id: 3, name: 'Steve Smith'}
    ]
  }

  // create a method to get data from an rest remote api
  getClientApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
  }

}

