export interface Ibook {
  name: string;
  description: string;
  price: number;
  category: BooksCategories;
  createDate: number;
  isAvailable: boolean;
}

export enum BooksCategories {
  fantasy = 'fantasy',
  adventure = 'adventure',
  romance = 'romance',
  horror = 'horror',
  art = 'art',
}
