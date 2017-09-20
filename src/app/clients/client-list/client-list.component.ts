import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Client, ClientFilterFields} from './../../models/client';
import { ClientService} from './../../services/client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ClientService]
})

export class ClientListComponent implements OnInit {

  filter: ClientFilterFields = new ClientFilterFields();
  constructor(
    private service: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.showHide = true;
  }


  showHide: Boolean;
  clients: Client[];


  ngOnInit() {
    this.service.getClients().subscribe(
      (clients: Client[]) => {this.clients = clients;
      });
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  goDetails(client: Client) {
    // console.log(client);
    const path = '/details/:';
     this.router.navigateByUrl(path.concat(client.email));

  }
}
