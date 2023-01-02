import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private cartService: CartService){ }

  @Input() book : Book = {} as Book

  isInCart: boolean = false

  addCart(){
    this.isInCart = true
    this.cartService.add(this.book)
  }

  removeCart(){
    this.isInCart = false
    this.cartService.remove(this.book)
  }

}
