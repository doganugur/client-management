import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MdExpansionModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client: Client;
  client$: Observable<Client>;
  email: string;
  step = 0;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.client$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.clientService.getClient(params.get('email')));
    // location.reload();

    //  this.route.paramMap.subscribe(
    //     params => this.email = params.get('email')
    //     );

  }

  goBack(): void {
    this.location.back();
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
