import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './../models/client';
@Pipe({
  name: 'clientFilter',
  pure: false
})
export class ClientFilterPipe implements PipeTransform {

  transform(value: Client[], firstName: string, lastName: string, gender: string, state: string): Client[] {
    if (!value) {
      return value;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return value.filter((item: Client) => this.applyFilter(item, firstName, lastName, gender, state ));
  }

  // apply filter rules
  applyFilter(item: Client,  firstName: string, lastName: string, gender: string, state: string): boolean {
     if (firstName && item.name.first.indexOf(firstName) === -1) {
       return false;
     } else if (lastName && item.name.last.indexOf(lastName) === -1) {
      return false;
    } else if (gender && item.gender !== gender) {
      return false;
    } else if (state && item.location.state.indexOf(state) === -1) {
      return false;
    }
    return true;
  }

}

