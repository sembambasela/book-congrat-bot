// commands/finished.js
const Book = require('../models/Book');
var index; 
module.exports = {
  name: "finished",
  description: "Log a book you've completed",
  async execute(message, args) {

    const bookTitle = args.join(" ");
    if (!bookTitle) {
      return message.reply("Please specify a book title! Example: `!finished The Hobbit`");
    }
    
    //TODO: Add database logic here later
    const book = new Book({
      userId: message.author.id,
      title: args.join(' '),
    });
    
    try {
      await book.save(); 
      message.reply(`:tada: Congrats on finishing **${bookTitle}**! Saved to your reading log. :tada:`);
    } catch(err) {
      console.error(err); 
      message.reply('Failed to save the book'); 
    }
  }
};