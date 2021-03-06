export interface IBook {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BooksCategories | string;
  createDate: number;
  isAvailable: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  amount: number;
  price: number;
  priceSum: number;
}

export enum BooksCategories {
  fantasy = 'fantasy',
  adventure = 'adventure',
  romance = 'romance',
  horror = 'horror',
  art = 'art',
}
