const Discord = require('discord.js');
const client = new Discord.Client();

BOT.TOKEN = NTM5NzY0NTYzNDA3NjY3MjEw.D1HaKA.xVSp17P-I5JeiVmQUA9bKGlU86o

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
