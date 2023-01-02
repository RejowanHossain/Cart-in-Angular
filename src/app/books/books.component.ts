import { Component } from '@angular/core';
import { Book } from 'src/app/types/Book';

import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor( private BooksService: BooksService) { }
  
  books: Book[] = []

  ngOnInit():void { 
    this.books = this.BooksService.getBooks()
  }

  isShowing = true

  handleClick(){
    this.isShowing = !this.isShowing
  }



}
