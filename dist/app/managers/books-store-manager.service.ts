import {Injectable} from '@angular/core';
import {Book} from '../book';

@Injectable()
export class BooksStoreManagerService {

  booksList: any;
  bookValues: Book;

  constructor() {
  }

}
