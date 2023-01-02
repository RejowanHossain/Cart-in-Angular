import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [

      {
        name : 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author :  'Robert C. Martin',
        url : 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 700,
      },
  
      {
        name : 'Head First Object-Oriented Analysis and Design',
        author :  ' Brett D. McLaughlin',
        url : 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51FNFnkTMKL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 500,
      },
  
      {
        name : 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author :  ' Gamma Erich',
        url : 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51JYkEpbhzL.jpg',
        amount: 1000,
      },
  
    ]
  }
}
