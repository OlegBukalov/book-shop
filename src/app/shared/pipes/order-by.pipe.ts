import { IProduct } from './../../models/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: IProduct[], field: string, sortFlag: boolean = false): IProduct[] {
    if (sortFlag) {
      if (field === 'name') {
        products.sort((a, b) => a.name > b.name ? -1 : 1);
      } else if (field === 'amount') {
        products.sort((a, b) => a.amount - b.amount);
      } else if (field === 'price') {
        products.sort((a, b) => a.priceSum - b.priceSum);
      }
    } else {
      if (field === 'name') {
        products.sort((a, b) => a.name > b.name ? 1 : -1);
      } else if (field === 'amount') {
        products.sort((a, b) => b.amount - a.amount);
      } else if (field === 'price') {
        products.sort((a, b) => b.priceSum - a.priceSum);
      }
    }
    return products;
  }
}
