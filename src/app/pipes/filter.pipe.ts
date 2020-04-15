
//How to use  - *ngFor=" let persion of persions | filter:{FirstName: text1, LastName: text2}"


import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false

})
export class FilterPipe  implements PipeTransform {

  //debugger;

  transform(items: Array < any > , conditions: {
    [field: string]: any
  }): Array < any > {
    return items.filter(item => {
 // debugger;
      for (let field in conditions) {
        //no case sensitive (item[field].toLowerCase().indexOf(conditions[field].toLowerCase()) >= 0)
        if (item[field].toString().toLowerCase().indexOf(conditions[field].toString().toLowerCase()) >= 0) {
          return true;
        } 
      }
      
      return false;

    });
  }

}