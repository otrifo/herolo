import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogComponent} from './components/dialog/dialog.component';
import {Book} from './book';
import {BooksStoreManagerService} from './managers/books-store-manager.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  booksList: Book[];
  bookListLength: number;

  constructor(public dialog: MdDialog, private storeService?: BooksStoreManagerService, private http?: Http) {
  }

  ngOnInit(): void {
    this.http.get('assets/json/booksData.json').subscribe(result => {
      this.booksList = result.json().data;
      this.storeService.booksList = this.booksList;
      this.bookListLength = this.booksList.length;
    })
  }


  addBook() {
    this.bookListLength++;
    this.storeService.bookValues = new Book(this.bookListLength, '', '', new Date);
    const dialog = this.dialog.open(DialogComponent, {
      width: '240px',
      data: 'New book'
    });
    dialog.afterClosed().subscribe(result => {
      if (result && result.dialogResult === 'true') {
        this.booksList.push(this.storeService.bookValues);
      }
    });
  }
}
