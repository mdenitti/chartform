import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private clientService: ClientService) { 
    
   
  }

  ngOnInit(): void {
    console.log(this.clientService.getClients())
  }

}
