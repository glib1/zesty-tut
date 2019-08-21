const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`-Help`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  


bot.login(process.env.token); bot.login(process.env.token); if (cmd === `${prefix}Verify`){
    message.channel.send("We are working to develop the verify command please wait atleast a year!");
  
 if (cmd === `${prefix}WhoIStheOWNER`){
    message.channel.send("#proRobloxUSER is the owner.");
  
   
if (cmd === `${prefix}DEVS`){
    message.channel.send("0 DEVS we have lol.");
  

 if (cmd === `${prefix}WhatsTheScript`){
    message.channel.send("Secret...");
  

 if (cmd === `${prefix}Help`){
    message.channel.send(" Heres all the commands -Ping -Verify -WhoIStheOWNER -DEVS -WhatsTheScript ");
  

