module.exports = {
    name: "iroh",
    description: "ask Iroh a question",
    execute(message, args) {

        let question = args[0]

        if (!question) {
            message.channel.send("*You must enter a question!*")
        }

        else {

            let responses = [
                "*It is certain*",
                "*It is quite so*",
                "*Without a doubt*", 
                "*Yes*", 
                "*All signs point to yes*", 
                "*Ask me in a bit, I'm tired*",
                "*Why don't you relax, have some tea!*",
                "*Outlook is good*", 
                "*Most likely*", 
                "*Very doubtful...*",
                "*The spirits say no*",
                "*Don't count on it*",
                "*As I see it, yes*"

        ]
            
            let response = Math.floor(Math.random() * responses.length)
        
            message.reply(responses[response])
        
    }
    }
}