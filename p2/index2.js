// Constructor function for Author
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }

  // Constructor function for Book
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }

  // Method added to the Book prototype
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("-----------------------");
  };

  // Create instances of Author and Book
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20.99);

  const author2 = new Author("George Orwell", 1903, "British");
  const book2 = new Book("1984", author2, "Dystopian", 15.99);

  const author3 = new Author("Jane Austen", 1775, "British");
  const book3 = new Book("Pride and Prejudice", author3, "Classic", 12.99);

  // Display book details for each book in the bookstore
  book1.getBookInfo();
  book2.getBookInfo();
  book3.getBookInfo();
