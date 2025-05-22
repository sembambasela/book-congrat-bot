module.exports = {
  name: 'hello',
  description: 'Replies with a greeting.',
  execute(message, args) {
    message.reply('👋 Hello! I’m your book worm bot!');
  }
};