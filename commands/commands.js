//template for commands 

// commands/command.js (base template)
module.exports = {
  name: "commandName",       // Command name (e.g., "finished")
  description: "Description", // What the command does
  execute(message, args) {   // Function to run when called
    message.reply("This is a template command!");
  }
};