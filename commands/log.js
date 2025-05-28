const Book = require('../models/Book');

module.exports = {
  name: "log",
  description: "returns the books logged by a user",
  async execute(message,args){
    try{
      //finding the books for the user that used the command
      const books = await Book.find({userId: message.author.globalName});
      if (message.author.globalName == 'ry.mac') {
        return message.reply("Stinky lybar read a real book!"); 
      } else if (books.length === 0){
        return message.reply("You haven't logged any books yet!");
      }
      //Formatting
      const bookList = books.map(book => 
        `• ${book.title} (${book.dateFinished.toLocaleDateString()})`
      ).join('\n');
      message.reply(`📚 Your logged books:\n${bookList}`);
    } catch(err) {
      console.error('Database error',err);
      message.reply("There are no books saved under this user. Try again later.");
    }
  }
}