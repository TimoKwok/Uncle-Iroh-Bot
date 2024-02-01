module.exports = {
    name: 'advice',
    description: "Provides the user with some Iroh wisom!",
    execute(message, args) {
        
        let responses = [
         "*There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is you want from your life.*",
         "*Failure is only the opportunity to begin again.*", 
         "*Sometimes, the best way to solve your own problems is to help someone else.*", 
         "*Good times become good memories, but bad times make good lessons.*", 
         "*It is usually best to admit mistakes when they occur, and to seek to restore honor.*", 
         "*It is important to draw wisdom from many different places.*", 
         "*It's time for you to look inward and start asking yourself the big question: who are you and what do you want?*", 
         "*Hope is something you give yourself. That is the meaning of inner strength.*", 
         "*Destiny is a funny thing. You never know how things are going to work out.*", 
         "*While it is always best to believe in oneself, a little help from others can be a great blessing.*", 
         "*Pride is not the opposite of shame, but its source. True Humility is the only antidote to shame.*", 
         "*Life happens wherever you are, whether you make it or not.*", 
         "*Follow your passion and life will reward you.*", 
         "*Many things that seem threatening in the dark become welcoming when we shine light on them.*", 
         "*If you look for the light, you can often find it. But if you look for the dark, that is all you will ever see.*"
        
        ]

        let response = Math.floor(Math.random() * responses.length)

        message.reply(responses[response])
    }
}