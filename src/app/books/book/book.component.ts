import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book, BookWithRating } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  newRating = new EventEmitter<BookWithRating>();

  @Input() book: Book;

  emptyStars: number;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;


  ngOnInit(): void {
    this.selectedValue = this.book.rating;
  }

  getEmptyStars(booksRating: number): number {
    return (this.emptyStars = 5 - booksRating);
  }

  countStar(rating: number): void {
    const newBookRating: BookWithRating = {
      book: this.book,
      rating,
    };
    this.newRating.emit(newBookRating);
  }

  addClass(star): void {
    console.log('star', star);
    console.log('selectedvalue', this.selectedValue);
    let ab = '';
    for (let i = 0; i < star; i++) {
      console.log('star i', star);
      ab = 'starId' + i;
      document.getElementById(ab).classList.add('selected');
    }
  }

  removeClass(star): void {
    console.log('removestar', star);
    let ab = '';
    for (let i = star - 1; i >= this.selectedValue; i--) {
      console.log('star i', star);
      ab = 'starId' + i;
      document.getElementById(ab).classList.remove('selected');
    }
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }
}
