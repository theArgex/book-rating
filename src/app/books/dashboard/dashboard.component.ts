import { Book, BookWithRating } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [
  /* {
    isbn: '3864906466',
    title: 'Angular',
    description: 'Buch über Angular',
    rating: 5
  },
  {
    isbn: '0991344626',
    title: 'React',
    description: 'Buch über React',
    rating: 3
  },
  {
    isbn: '1925836096',
    title: 'Vue',
    description: 'Buch über Vue',
    rating: 4
  },
  {
    isbn: '1491933178',
    title: 'The Hitchhikers Guide to the Galaxy',
    description: '42',
    rating: 5
  } */
  ];

  maxRating = 5;
  minRating = 1;

  constructor(private br: BookRatingService, bs: BookStoreService) {
     bs.getAllBooks().subscribe(books => this.books = books);
   }

  ngOnInit(): void {
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  setRating(newBookRating: BookWithRating): void {
    const ratedBook = this.br.setRating(newBookRating);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  checkDisableRateUp(rating: number): boolean {
    return this.br.checkDisableRateUp(rating);
  }

  checkDisableRateDown(rating: number): boolean {
    return this.br.checkDisableRateDown(rating);
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
    this.updateAndSort(newBook);
    console.log('created Book: ', newBook);
  }

}
