// commands/finished.js
const Book = require('../models/Book');

module.exports = {
  name: "finished",
  description: "Log a book you've completed",
  async execute(message, args) {

    //Creating variables for a book
    //RegEx rule for a book title and storing of the book name and book author
    const bookTitle = args.join(" ");
    const bookRule = /^(.+?)\s+[bB]y\s+(.+)$/;
    const [bookName, bookAuthor] = bookTitle.split(/\s+[bB]y\s+/);
    
    if (!bookRule.test(bookTitle)) {
      return message.reply("Please specify a book title! Example: `!finished The Hobbit by J.R.R Tolkien` A book title must have a book name and author.");
    }    
    
    //Creating a new book instance to be inserted into database
    const book = new Book({
      userId: message.author.globalName,
      title: bookName.trim(),
      author: bookAuthor.trim(),
    });
    
    try {
      await book.save(); 
      message.reply(`:tada: Congrats on finishing **${bookTitle}**! Saved to your reading log ${message.author.globalName}. :tada:`);
    } catch(err) {
      console.error(err); 
      message.reply('Failed to save the book'); 
    }
  }
};