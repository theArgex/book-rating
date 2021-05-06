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
    isbn: '000',
    title: 'Angular',
    description: 'Buch über Angular',
    rating: 5
  },
  {
    isbn: '001',
    title: 'React',
    description: 'Buch über React',
    rating: 3
  },
  {
    isbn: '002',
    title: 'Vue',
    description: 'Buch über Vue',
    rating: 4
  },
  {
    isbn: '003',
    title: 'The Hitchhikers Guide to the Galaxy',
    description: '42',
    rating: 5
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
