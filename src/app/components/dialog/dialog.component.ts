import {Component, Inject, OnInit} from '@angular/core';
import {BooksStoreManagerService} from '../../managers/books-store-manager.service';
import {Book} from '../../book';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {

  bookValues: Book;
  dialogHeader: string;
  bookName: string;
  hasTitleName: Boolean;

  constructor(private storeService?: BooksStoreManagerService, @Inject(MD_DIALOG_DATA) public type?: any,
              public dialogRef?: MdDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {
    this.bookValues = new Book(this.storeService.bookValues.id,
      this.storeService.bookValues.title,
      this.storeService.bookValues.author,
      this.storeService.bookValues.date);
    this.dialogHeader = this.type;
    this.bookName = this.bookValues.title;
  }

  saveValues(values) {
    const valuesTitle = this.clearWhitSpaces(values.title);
    for (const book of this.storeService.booksList) {
      if (book.id !== values.id) {
        const bookTitle = this.clearWhitSpaces(book.title);
        if (bookTitle.includes(valuesTitle) && bookTitle.length === valuesTitle.length) {
          this.hasTitleName = true;
        }
      }
    }
    if (!this.hasTitleName) {
      this.storeService.bookValues = this.bookValues;
      this.dialogRef.close({
        dialogResult: 'true'
      });
    }
  }

  private clearWhitSpaces(value) {
    return value.replace(/\s/g, '');
  }
}
