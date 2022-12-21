import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  // declare space
  clients: any[] = [];
  sortRange: any;

  // inject the service constructor
  constructor(private clientService: ClientService) { 
  
  }

  // ngOnInit() is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.clientService.getClientApi()
    .then(data => this.clients = data.map(
      (client: any) => {
        return {
          name: client.name,
          number: client.id+1,
          phone: client.phone,
          email: client.email,
        }
      }
    ))
    .catch();
  }

  // custom method to get data from the service

  search(arg0: string) {
    console.log(arg0);
    this.clients = this.clients.filter(client => client.name === arg0)
    console.log(this.clients);
    }

    sortClients() {
      console.log(this.sortRange)
      this.clients = this.clients.filter(client => client.number > this.sortRange)
      }

}
