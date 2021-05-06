export interface Book {
  isbn: string;
  title: string;
  description: string;
  rating: number;
}

export interface BookWithRating {
  book: Book;
  rating: number;
}
