module.exports = {
    name: 'tea',
    description: "gives the user tea!",
    execute(message, args){

        let responses = [
            "https://media.tenor.com/images/61b42cf00e8915ae3eb146239bf49d83/tenor.gif",
            "https://media.tenor.com/images/e3b73b3d205d79c8f10303762a93aa44/tenor.gif",
            "http://i.imgur.com/0COYGw9.gif",
            "https://thumbs.gfycat.com/HeftyUnselfishHorsemouse-size_restricted.gif",
            "https://78.media.tumblr.com/a8db74b2ed219d1e34333a7334147ff3/tumblr_pa5if6eAAM1wfazcjo1_540.gif",
            "https://i.pinimg.com/originals/96/54/d8/9654d8a8c851f119251edfe15d702fc0.gif",
            "https://i.pinimg.com/originals/29/7c/d8/297cd843c60f7857b279ca84f44d19fa.gif"

        ]

        let response = Math.floor(Math.random() * responses.length)

        persontea = message.mentions.users.first()
        if (persontea){
           
            message.channel.send(`*${message.author.username} gives ${persontea.username} some warm tea! :tea:*`)
            message.channel.send(responses[response])

       
    }   else if (!args[0]) return message.reply('*Here is your tea! :tea:*');



    }
} 