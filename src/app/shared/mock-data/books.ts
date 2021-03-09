import { BooksCategories } from '../../models/book.model';

export const books = [
  {
    id: 1,
    name: 'About angular',
    description: 'This book tell you about angular',
    price: 100,
    category: BooksCategories.horror,
    createDate: 2020,
    isAvailable: true
  },
  {
    id: 2,
    name: 'About js',
    description: 'This book tell you about js',
    price: 1000,
    category: BooksCategories.fantasy,
    createDate: 2021,
    isAvailable: false
  },
  {
    id: 3,
    name: 'About HTML & CSS',
    description: 'This book tell you about HTML & CSS',
    price: 50,
    category: BooksCategories.art,
    createDate: 2018,
    isAvailable: true
  }
];
