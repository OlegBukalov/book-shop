import { IProduct } from './../../models/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: IProduct[], field: string, sortFlag: boolean = false): IProduct[] {
    if (field === 'name' || field === 'amount' || field === 'price') {
      if (sortFlag) {
        products.sort((a, b) => a[field] > b[field] ? 1 : -1);
      } else {
          products.sort((a, b) => a[field] > b[field] ? -1 : 1);
      }
    }
    return products;
  }
}
