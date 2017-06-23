webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-btn {\n  color: white;\n}\n\n.add-img {\n  margin-right: 1px;\n  margin-top: 8px;\n}\n\n.books-layout {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.mat-toolbar {\n  background-color: #603013;\n}\n\n.tool-bar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"books-store\">\n  <md-toolbar color=\"primary\">\n    <span>Oshri Books Store</span>\n    <span class=\"tool-bar-spacer\"></span>\n    <button md-button class=\"add-btn\" (click)=\"addBook()\">Add Book</button>\n  </md-toolbar>\n  <div class=\"books-layout\">\n    <app-book-card *ngFor=\"let book of booksList;let i = index\" [book]=\"book\" [index]=\"i\"></app-book-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__("../../../../../src/app/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__ = __webpack_require__("../../../../../src/app/managers/books-store-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(dialog, storeService, http) {
        this.dialog = dialog;
        this.storeService = storeService;
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/json/booksData.json').subscribe(function (result) {
            _this.booksList = result.json().data;
            _this.storeService.booksList = _this.booksList;
            _this.bookListLength = _this.booksList.length;
        });
    };
    AppComponent.prototype.addBook = function () {
        var _this = this;
        this.bookListLength++;
        this.storeService.bookValues = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](this.bookListLength, '', '', new Date);
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_dialog_dialog_component__["a" /* DialogComponent */], {
            width: '240px',
            data: 'New book'
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result && result.dialogResult === 'true') {
                _this.booksList.push(_this.storeService.bookValues);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__["a" /* BooksStoreManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__["a" /* BooksStoreManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managers_books_store_manager_service__ = __webpack_require__("../../../../../src/app/managers/books-store-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_book_card_book_card_component__ = __webpack_require__("../../../../../src/app/components/book-card/book-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_9__components_book_card_book_card_component__["a" /* BookCardComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__components_dialog_dialog_component__["a" /* DialogComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__managers_books_store_manager_service__["a" /* BooksStoreManagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(id, title, author, date) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\n  float: right;\n  height: 30px;\n  width: 30px;\n}\n\n.delete {\n  float: left;\n  height: 30px;\n  width: 30px;\n}\n\n.btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.edit-img {\n  margin-left: 3px;\n}\n\n.delete-img {\n  margin-top: 5px;\n}\n\n.book-card {\n  margin: 18px;\n  padding: 14px;\n  width: 220px;\n  height: 150px;\n}\n\n.details {\n  margin: 5px;\n  text-align: center;\n}\n\n.book-img {\n  height: 60px;\n  margin: 0 50px 10px;\n}\n\n.title {\n  font-size: 16px;\n  height: 20px;\n}\n\n.author, .date {\n  font-size: 13px;\n}\n\n.text{\n  margin-bottom: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"book-card\">\n  <button md-mini-fab class=\"delete\" (click)=\"deleteBook(book,index)\" color=\"warn\"><img\n    src=\"../assets/images/delete.svg\"\n    class=\"delete-img\"></button>\n  <img src=\"../assets/images/book-img.svg\" class=\"book-img\">\n  <button md-mini-fab class=\"edit\" (click)=\"editBook(book,index)\" color=\"warn\"><img src=\"../assets/images/edit.svg\"\n                                                                                    class=\"edit-img\"></button>\n  <md-card-content class=\"details\">\n    <div class=\"text title\" title=\"{{book.title | capitalize}}\">{{book.title | capitalize}}</div>\n    <div class=\"text author\" title=\"{{book.author | capitalize}}\">Author : {{book.author| capitalize}}</div>\n    <div class=\"text date\" title=\"{{book.date | date}}\">Publish Date : {{book.date | date}}</div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__("../../../../../src/app/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__ = __webpack_require__("../../../../../src/app/managers/books-store-manager.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookCardComponent = (function () {
    function BookCardComponent(dialog, storeService) {
        this.dialog = dialog;
        this.storeService = storeService;
    }
    BookCardComponent.prototype.ngOnInit = function () {
    };
    BookCardComponent.prototype.deleteBook = function (book, index) {
        var _this = this;
        this.storeService.bookValues = new __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */](0, book.title, '', null);
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogComponent */], {
            data: 'delete'
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result === 'delete') {
                _this.storeService.booksList.splice(index, 1);
            }
        });
    };
    BookCardComponent.prototype.editBook = function (editBook, index) {
        var _this = this;
        this.storeService.bookValues = editBook;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_component__["a" /* DialogComponent */], {
            width: '240px',
            data: 'edit'
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result && result.dialogResult === 'true') {
                _this.storeService.booksList[index] = _this.storeService.bookValues;
            }
        });
    };
    return BookCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */]) === "function" && _a || Object)
], BookCardComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], BookCardComponent.prototype, "index", void 0);
BookCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-book-card',
        template: __webpack_require__("../../../../../src/app/components/book-card/book-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book-card/book-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__["a" /* BooksStoreManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__managers_books_store_manager_service__["a" /* BooksStoreManagerService */]) === "function" && _c || Object])
], BookCardComponent);

var _a, _b, _c;
//# sourceMappingURL=book-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  margin-bottom: 6px;\n}\n\n.has-title {\n  color: #ea0000;\n}\n\n.mat-button {\n  margin-left: auto;\n}\n\n.save-btn {\n  color: #0000bf;\n}\n\n.cancel-btn, .delete-btn {\n  color: #c10000;\n}\n\n.delete-msg{\n  font-size: 18px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\" *ngIf=\"type !== 'delete'\">\n  <h2 md-dialog-title>{{type}} {{bookName}}</h2>\n  <form (ngSubmit)=\"saveValues(bookValues)\" #BookForm=\"ngForm\">\n    <md-dialog-content>\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"Book name\" [(ngModel)]=\"bookValues.title\" name=\"title\"\n               required/>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"Author\" [(ngModel)]=\"bookValues.author\" name=\"author\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput [(ngModel)]=\"bookValues.date\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"date\"\n               required>\n        <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n      <md-datepicker #picker></md-datepicker>\n      <div class=\"has-title\" *ngIf=\"hasTitleName\">Book name already exists</div>\n    </md-dialog-content>\n    <md-dialog-actions>\n      <button md-button md-dialog-close=\"cancel\" class=\"cancel-btn\">Cancel</button>\n      <button md-button type=\"submit\" class=\"save-btn\" [disabled]=\"!BookForm.form.valid\">Save</button>\n    </md-dialog-actions>\n  </form>\n</div>\n<div class=\"dialog\" *ngIf=\"type === 'delete'\">\n  <md-dialog-content>\n    <span class=\"delete-msg\">Are you sure you want to delete {{bookName}} ?</span>\n  </md-dialog-content>\n  <md-dialog-actions>\n    <button md-button md-dialog-close=\"delete\" class=\"delete-btn\">delete</button>\n  </md-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__managers_books_store_manager_service__ = __webpack_require__("../../../../../src/app/managers/books-store-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__("../../../../../src/app/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogComponent = (function () {
    function DialogComponent(storeService, type, dialogRef) {
        this.storeService = storeService;
        this.type = type;
        this.dialogRef = dialogRef;
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.bookValues = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](this.storeService.bookValues.id, this.storeService.bookValues.title, this.storeService.bookValues.author, this.storeService.bookValues.date);
        this.dialogHeader = this.type;
        this.bookName = this.bookValues.title;
    };
    DialogComponent.prototype.saveValues = function (values) {
        var valuesTitle = this.clearWhitSpaces(values.title);
        for (var _i = 0, _a = this.storeService.booksList; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.id !== values.id) {
                var bookTitle = this.clearWhitSpaces(book.title);
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
    };
    DialogComponent.prototype.clearWhitSpaces = function (value) {
        return value.replace(/\s/g, '');
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/components/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dialog/dialog.component.css")],
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__managers_books_store_manager_service__["a" /* BooksStoreManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__managers_books_store_manager_service__["a" /* BooksStoreManagerService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialogRef */]) === "function" && _b || Object])
], DialogComponent);

var _a, _b;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/managers/books-store-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksStoreManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksStoreManagerService = (function () {
    function BooksStoreManagerService() {
    }
    return BooksStoreManagerService;
}());
BooksStoreManagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BooksStoreManagerService);

//# sourceMappingURL=books-store-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map