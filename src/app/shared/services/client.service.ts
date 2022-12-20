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

}
