import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating: number = 1;
  readonly maxRating: number = 5;

  constructor() { }

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(book.rating + 1, this.maxRating)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(book.rating - 1, this.minRating)
    };
  }
}
