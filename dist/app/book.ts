export class Book {
  id: number;
  title: string;
  author: string;
  date: Date;

  constructor(id: number, title: string, author: string, date: Date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
  }
}
