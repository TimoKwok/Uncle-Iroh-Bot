module.exports = {
    name: 'youtube',
    description:"sends a link to youtube!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/');
    }
}