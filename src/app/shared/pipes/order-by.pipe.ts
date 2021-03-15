import { IProduct } from './../../models/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: IProduct[], field: string, flag: boolean = false): IProduct[] {
    if (flag) {
      products.sort((a, b) => a.name > b.name ? -1 : 1)
    } else {
      products.sort((a, b) => a.name > b.name ? 1 : -1)
    }

    return products;
  }

  // public ascendingSort(field: string) {
  //   return (a: IProduct, b:IProduct) => a[field] > b[field] ? 1 : -1;
  // }

  // public descendingSort(field: string) {
  //   return
  // }

}
