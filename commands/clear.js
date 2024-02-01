module.exports = {
    name: 'clear', 
    description: "clear messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("*Uh...How many messages do you want me to delete?*");
        if(isNaN(args[0])) return message.reply("*I may be old, but i still know that was not a number!*");

        if(args[0] > 100) return message.reply("*I think that is a bit too much destruction...*");
        if(args[0] < 1) return message.reply("*That is beyond my power, you need to delete at least one message.*");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}