module.exports = {
    name: 'hug',
    description: "hug someone",
    execute(message, args) {
        
        let responses = [
            "https://i.pinimg.com/originals/68/9a/4c/689a4ce8b2813769ae7e50c4c9300bbb.gif",
            "https://i.gifer.com/Vtqm.gif",
            "https://thumbs.gfycat.com/UnsightlyHastyGossamerwingedbutterfly-size_restricted.gif",
            "https://i.gifer.com/BqY1.gif",
            "https://i.pinimg.com/originals/4b/c1/d1/4bc1d135269dbfccdadcb1b543210abb.gif",
            "https://i1.wp.com/media1.tenor.com/images/097b4670f7341e85cbc14565d7fdf0f7/tenor.gif?w=1200&ssl=1",
            "https://thumbs.gfycat.com/ImmensePerfumedCrow-size_restricted.gif",
            "https://64.media.tumblr.com/b41fa9ad77084ab7477f4b1587815d54/283f687748d7fb3e-ae/s500x750/679dd7c7a13fd2a2779d33087c5a54ccf11bb4b1.gifv",
            "https://64.media.tumblr.com/d554d3ac4518ca9e889a23ace6682cef/tumblr_pioot0kgx41sieiueo8_r1_500.gifv"

        ]

        let response = Math.floor(Math.random() * responses.length)

        personHugged = message.mentions.users.first()
        if (personHugged){
            message.channel.send(`*${message.author.username} hugs ${personHugged.username}! :heart:*`),
            message.channel.send(responses[response])

        } else if (!args[0]) return message.reply("*Who is it that you would like to hug?*");
    }
}