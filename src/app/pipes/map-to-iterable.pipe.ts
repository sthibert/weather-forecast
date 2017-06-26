import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from 'lodash';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(dict: Dictionary<any>): Array<any> {
    const a = [];
    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key: key, value: dict[key] });
      }
    }
    return a;
  }

}
