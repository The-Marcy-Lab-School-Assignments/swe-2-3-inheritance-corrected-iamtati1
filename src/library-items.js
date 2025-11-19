/* eslint-disable max-classes-per-file */

class LibraryItem {

  constructor(title, year) {
    this.title = title
    this.year = year
    this.isCheckedOut = false;
  }

  checkOut() {
    this.isCheckedOut = true;
    return (`${this.title} has been checked out`)
  }

  returnItem() {
    this.isCheckedOut = false;
    return (`${this.title} has been returned`)
  }
  getDescription() {
    return (`${this.title} (${this.year})`)
  }
}
const item = new LibraryItem('The Great Gatsby', 1925);
console.log(item.title); // The Great Gatsby
console.log(item.year); // 1925
console.log(item.isCheckedOut); // false
console.log(item.checkOut()); // The Great Gatsby has been checked out
console.log(item.isCheckedOut); // true
console.log(item.returnItem()); // The Great Gatsby has been returned
console.log(item.isCheckedOut); // false
console.log(item.getDescription()); // The Great Gatsby (1925)


class Book extends LibraryItem {
  constructor(title, year, author, pages) {
    super(title, year);

    this.author = author;
    this.pages = pages;
    this.isCheckedOut = false
  }
  getDescription() {
    return (`${this.title} (${this.year}) by ${this.author}, ${this.pages} pages`);
  }
}

const book = new Book('The Color Purple', 1982, 'Alice Walker', 295);
console.log(book.title); // The Color Purple
console.log(book.year); // 1982
console.log(book.author); // Alice Walker
console.log(book.pages); // 295
console.log(book.getDescription()); // The Color Purple (1982) by Alice Walker, 295 pages
console.log(book.checkOut()); // The Color Purple has been checked out
console.log(book.isCheckedOut); // true

class DVD extends LibraryItem {
  constructor(title, year, director, runtime) {
    super(title, year); // runs the constructor of the parent class
    this.director = director;
    this.runtime = runtime;

  }
  getDescription() {
    return (`${this.title} (${this.year}) directed by ${this.director}, ${this.runtime} min`);
  }
}
const dvd = new DVD('Inception', (2010), 'Christopher Nolan', 148);
console.log(dvd.title); // Inception
console.log(dvd.director); // Christopher Nolan
console.log(dvd.runtime); // 148
console.log(dvd.getDescription()); // Inception (2010) directed by Christopher Nolan, 148 min
console.log(dvd.checkOut()); // Inception has been checked out
console.log(dvd.isCheckedOut); // true


class Magazine extends LibraryItem {
  constructor(title, year, issue) {
    super(title, year);
    this.issue = issue;
  }

  getDescription() {
    return `${this.title} (${this.year}) Issue #${this.issue}`;
  }
}
const magazine = new Magazine('National Geographic', 2024, 5);
console.log(magazine.title); // National Geographic
console.log(magazine.issue); // 5
console.log(magazine.getDescription()); // National Geographic (2024) Issue #5
console.log(magazine.checkOut()); // National Geographic has been checked out
console.log(magazine.returnItem()); // National Geographic has been returned

module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
