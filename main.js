const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Uncle Iroh is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if(command == 'tea'){
        client.commands.get('tea').execute(message, args);
    } else if(command === 'advice'){
        client.commands.get('advice').execute(message, args);
    } else if(command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'hug'){
        client.commands.get('hug').execute(message, args);
    } else if(command === 'iroh'){
        client.commands.get('iroh').execute(message, args);
    }
});

client.login('ODYxMzY4Nzk4MDUyMjIwOTQ4.YOIyNA.VBF4TI2w-po9SM1XC_tR7oJD1js');
