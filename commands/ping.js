//Here the command starts
module.exports = {
    //definition
     name: "ping", //the name of the command 
     category: "informationen ร", //the category this will be listed at, for the help cmd
     aliases: ["latency"], //every parameter can be an alias
     cooldown: 2, //this will set it to a 2 second cooldown
     usage: "ping", //this is for the help command for EACH cmd
   description: "Informiert Sie รผber Ihren aktuellen Ping", //the description of the command
 
     //running the command with the parameters: client, message, args, user, text, prefix
   run: async (client, message, args, user, text, prefix) => {
         //creating a temporary message
         const msg = await message.channel.send(`๐ Pinging...`); 
         //editing it to the actual latency
         msg.edit(`๐ Pong!
         Ping is ${Math.round(client.ws.ping)}ms\n-> Developed by Protyo#0005`);

     }
 }
 
 /**********************************************************
 * @INFO
 * Bot Coded by Protyo#0005
 * @INFO
 * Work for KooJe Development | https://dev.kooje.eu
 * @INFO
 * Please mention him & KooJe Development, when using this Code!
 * @INFO
 *********************************************************/
