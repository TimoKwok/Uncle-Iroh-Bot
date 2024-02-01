module.exports = {
    name: 'info',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#A10000')
        .setTitle('Uncle Iroh here!')
        .setDescription('*Hello! my name is Iroh, retired Fire Nation general and Grand Lotus. I am here to provide you with guidance, wisdom, and tea! Here are some of the things that I can do!*')
        .setImage('https://static.wikia.nocookie.net/17049b50-a239-48a2-8882-7fd94217c0d3')
        .addFields(
            {name: '-info', value: '*Some information about me!*'}, 
            {name: '-tea', value: '*I will provide you with some tea, or if you mention another user, I can give them some tea! :tea:*'}, 
            {name: '-advice', value: '*I am always here to give you advice on your journey!*'}, 
            {name: '-clear', value: '*I can use my firebending abilities to delete messages! :fire:*'},
            {name: '-hug', value: '*Use this command to hug your friends!*'}
        )
        .setFooter('Have a lovely day!');

        message.channel.send(newEmbed);
    } 

}