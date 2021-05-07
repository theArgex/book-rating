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

  @Input()
  disableRateDown = false;

  @Input()
  disableRateUp = false;

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

  addClass(star: number): void {
    let starId = '';
    for (let i = 0; i < star; i++) {
      starId = 'starId' + i;
      document.getElementById(starId).classList.add('selected');
    }
  }

  removeClass(star: number): void {
    let starId = '';
    for (let i = star - 1; i >= this.selectedValue; i--) {
      starId = 'starId' + i;
      document.getElementById(starId).classList.remove('selected');
    }
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }
}
