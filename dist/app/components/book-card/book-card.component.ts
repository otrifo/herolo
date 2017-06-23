import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../book';
import {DialogComponent} from '../dialog/dialog.component';
import {MdDialog} from '@angular/material';
import {BooksStoreManagerService} from '../../managers/books-store-manager.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  constructor(public dialog?: MdDialog, private storeService?: BooksStoreManagerService) {
  }

  ngOnInit() {
  }

  deleteBook(book, index) {
    this.storeService.bookValues = new Book(0, book.title, '', null);
    const dialog = this.dialog.open(DialogComponent, {
      data: 'delete'
    });
    dialog.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.storeService.booksList.splice(index, 1);
      }
    });

  }

  editBook(editBook, index) {
    this.storeService.bookValues = editBook;
    const dialog = this.dialog.open(DialogComponent, {
      width: '240px',
      data: 'edit'
    });
    dialog.afterClosed().subscribe(result => {
      if (result && result.dialogResult === 'true') {
        this.storeService.booksList[index] = this.storeService.bookValues;
      }
    });
  }
}
