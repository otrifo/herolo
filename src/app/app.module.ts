import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {BooksStoreManagerService} from './managers/books-store-manager.service';
import {FormsModule} from '@angular/forms';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {BookCardComponent} from './components/book-card/book-card.component';
import {MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CapitalizePipe,
    BookCardComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    HttpModule
  ],
  providers: [BooksStoreManagerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
