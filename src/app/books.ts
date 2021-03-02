import { BooksCategories } from "./models/book.model";

export const books = [
  {
    name: 'About angular',
    description: 'This book tell you about angular',
    price: 100,
    category: BooksCategories.horror,
    createDate: 20201210,
    isAvailable: true
  },
  {
    name: 'About js',
    description: 'This book tell you about js',
    price: 1000,
    category: BooksCategories.fantasy,
    createDate: 20210101,
    isAvailable: false
  },
  {
    name: 'About HTML & CSS',
    description: 'This book tell you about HTML & CSS',
    price: 50,
    category: BooksCategories.art,
    createDate: 20210101,
    isAvailable: true
  }
]
