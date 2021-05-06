import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [
  {
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
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  doRateUp(): void {
    debugger
  }

  doRateDown(): void {
    debugger
  }

}
