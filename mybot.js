const Discord = require("discord.js");
const client = new Discord.Client();
//add your fields here
const fields=["Dankmeter"];
client.on("ready", () => {
  console.log("I am ready!");
});
const prefix = "do curate"; // the command that the bot responds to.
client.on("message", (message) => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    {
        console.log('received');
        var mems = message.channel.members;
        var dict=[];
        var res="";
        for (let [snowflake, guildMember] of mems) { dict.push(guildMember.user.username); }
        for(x in dict)
        {
            res+="Name: \t"+dict[x];
            res+="\n";
            for( y in fields)
            {
                var random = Math.floor(Math.random() * (100 - 0) + 0);
                res+="\t "+fields[y]+": \t "+random+"%\n";
            }
        }
        message.channel.send(res);
    }
});
 
client.login("Your auth token here");