const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const PREFIX = "?"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }else{
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    switch(args[0]){
        case 'website':
            msg.channel.send("http://ec2-54-235-11-37.compute-1.amazonaws.com/ElectricVehicles/")
            break;
        case 'avatar':
            msg.reply(msg.author.displayAvatarURL())
            break;
        case 'clear':
            if (!args[1]){
                return msg.reply("Error please define a second parameter")
            }else{
                msg.channel.bulkDelete(args[1])
                break;
            }
    }



  }
});


client.login('ODM5OTEzMTAwNjU5NjU0NjU2.YJQkCA.2iqzrfiY3MRyj22i5AIzcQx5oY0');