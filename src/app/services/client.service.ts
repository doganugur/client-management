import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Client } from './../models/client';

@Injectable()
export class ClientService implements OnInit {
result: Observable<Client[]>;
 // Inject HttpClient into your component or service.
 constructor(private http: HttpClient) {}

 ngOnInit(): void {
 }

 getClients() {
  return this.http.get<Client[]>('./assets/clients.json');
 }

 getClient(value: string) {
    return this.getClients()
                .map(clients => clients.find(client => client.email === value.replace(':', '')));
   }
}
