import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  @Input() book: Book;

  emptyStars: number;

  getEmptyStars(booksRating: number): number {
    return (this.emptyStars = 5 - booksRating);
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }
}
