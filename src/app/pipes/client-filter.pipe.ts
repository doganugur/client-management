import { Pipe, PipeTransform } from '@angular/core';
import { Client, ClientFilterFields } from './../models/client';
@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {

  transform(value: Client[], args?: ClientFilterFields): Client[] {
    if (!value || !args) {
      return value;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return value.filter((item: Client) => this.applyFilter(item, args));
  }

  applyFilter(item: Client, args?: ClientFilterFields): boolean {
    // if (item.name.first.indexOf(args.firstName) === -1) {
    //   return false;
    // }
    return true;
  }

}

