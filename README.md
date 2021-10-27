# INB_BOTLIST - # An API wrapper for inb botlist
[![Discord](https://img.shields.io/discord/902138867199643679?color=7289da&label=Discord&logo=discord&logoColor=ffffff)](https://discord.gg/hpYRxZ2KrF)

Example code:
> REMEMBER: ONLY USE TRUE IF YOU USE SHARDS
```
const Discord = require("discord.js");
const client = new Discord.Client();
const inb = require("inb_botlist");

client.on("ready", () => {
  setInterval(function(){
	inb.apiPosteBotlist('INB_BOTLIST_TOKEN', client, true/false)
  }, 1800000);
});
```

* This is official INB BOTLIST wrapper.
* Links:
 > https://inbbotlist.com
 > https://discord.gg/TqPKPZR6by
